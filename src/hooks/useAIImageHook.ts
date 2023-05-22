import { useState } from "react"

export default function useAIImageHook() {
    const [eventDetailsVisible, setEventDetailsVisible] = useState(false)
    const [eventName, setEventName] = useState('')
    const [eventDetails, setEventDetails] = useState('')
    const [chatGPTSearchText, setChatGPTSearchText] = useState('')
    const [searchedBase64Images, setSearchedBase64Images] = useState<string[]>([]);

    async function callChatGPTAPI(prompt: string): Promise<string> {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Replace with your OpenAI API key
        const endpoint = 'https://api.openai.com/v1/chat/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        };

        const body = JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers,
            body,
        };

        try {
            const response = await fetch(endpoint, requestOptions);
            const data = await response.json();
            const chatGPTResponse = data.choices[0].message.content;
            setChatGPTSearchText(chatGPTResponse)
            return chatGPTResponse;
        } catch (error) {
            console.error('Error calling ChatGPT API:', error);
            throw error;
        }
    }

    async function getImagesFromDreamStudio(prompt: string) {
        const apiUrl = 'https://api.stability.ai/v1/generation/stable-diffusion-v1-5/text-to-image';
        const accessToken = import.meta.env.VITE_DREAM_STUDIO_API_KEY;

        const requestData = {
            samples: 3,
            text_prompts: [
                {
                    text: prompt
                }
            ],
            image_strength: 0.2
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(requestData)
        })

        const data = await response.json()
        if (data.artifacts && data.artifacts.length > 0) {
            const base64Array = data.artifacts.map((item: any) => item.base64)
            setSearchedBase64Images(base64Array)
            return base64Array
        } else {
            return []
        }

    }

    return {
        setEventDetailsVisible,
        eventDetailsVisible,
        eventName,
        setEventName,
        eventDetails,
        setEventDetails,
        callChatGPTAPI,
        chatGPTSearchText,
        setChatGPTSearchText,
        getImagesFromDreamStudio,
        searchedBase64Images,
    };
}
