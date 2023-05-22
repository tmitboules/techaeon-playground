import { Configuration, ImagesResponseDataInner, OpenAIApi } from 'openai';
import { useEffect, useState } from "react";
import { useFilePicker } from "use-file-picker";
import { urltoFile } from '../utils';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})
const maxTechaeonSize = 256

export default function useImageSearchHook() {
  const openai = new OpenAIApi(configuration);
  const [imageSearchLoading, setImageSearchLoading] = useState(false);
  const [searchedImages, setSearchedImages] = useState<ImagesResponseDataInner[]>([]);
  const [searchedBase64Images, setSearchedBase64Images] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState('')
  const [searchedPrompt, setSearchedPrompt] = useState('')
  const [eventDetailsVisible, setEventDetailsVisible] = useState(false)
  const [eventName, setEventName] = useState('')
  const [eventDetails, setEventDetails] = useState('')
  const [chatGPTSearchText, setChatGPTSearchText] = useState('')

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
    // imageSizeRestrictions: {
    //   maxHeight: maxTechaeonSize, // in pixels
    //   maxWidth: maxTechaeonSize,
    //   minHeight: 10,
    //   minWidth: 10,
    // },
  });

  useEffect(() => {
    if (filesContent && filesContent.length > 0) {
      setSelectedImage(filesContent[0].content)
    }
  }, [filesContent])

  const generateImageOnString = async (prompt: string) => {
    if (!prompt) return
    setImageSearchLoading(true)
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 9,
        size: "256x256",
      });
      if (response && response.data && response.data.data) {
        setSearchedImages(response.data.data.filter(
          (obj) => obj.url
        ));
      }
    } catch (error) {

    } finally {
      setImageSearchLoading(false)
    }
  };

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


  const convertImages = async (image: string) => {
    const contentType = "image/png";
    const imageToDisplay = await urltoFile(
      "data:image/png;base64," + image,
      `openapi-image-${Date.now()}.png`,
      contentType
    );

    const convertedFile = URL.createObjectURL(imageToDisplay)
    return convertedFile
  };


  return {
    generateImageOnString,
    searchedImages,
    imageSearchLoading,
    openFileSelector,
    selectedImage,
    searchedPrompt,
    setSearchedPrompt,
    setSearchedImages,
    setSelectedImage,
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
    convertImages
  };
}
