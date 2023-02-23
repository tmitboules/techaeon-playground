import { useFilePicker } from "use-file-picker";
import { Configuration, OpenAIApi } from 'openai'

import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import { useState } from "react";
import { useEffect } from "react";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})



function AnimationApp() {
  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [resultArray, setResultArray] = useState("")
  const [displaySearchImageOptions, setDisplaySearchImageOptions] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>()

  const maxSize = 256

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    
    multiple: false,
   
    imageSizeRestrictions: {
      maxHeight: maxSize, // in pixels
      maxWidth: maxSize,
      minHeight: 10,
      minWidth: 10,
    },
  });

  const generateImage = async () => {

    const response = await openai.createImage({
      prompt: prompt,
      n: 10,
      size: "256x256",
    });

    console.log("Data", response.data.data)
    setResult(response.data.data[0].url)
    setResultArray(response.data.data.filter(
      (obj) => obj.url
    ))
  };

  useEffect(() => {
    if (filesContent && filesContent.length > 0) {
      setSelectedImage(filesContent[0].content)
    }
  }, [filesContent])

  return (
    <main>
      <SiteHeader />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TechaeonCoin
          shape={Shapes.square}
          color={{ r: 255, g: 194, b: 38 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imagePath={selectedImage}
        />
      </div>
      <button onClick={openFileSelector}>from gallery</button>
      <button style={{ marginLeft: 20 }} onClick={() => {
        setDisplaySearchImageOptions((displaySearchImageOptions) => !displaySearchImageOptions)
      }}>Search Image</button>

      {displaySearchImageOptions &&
        <div>
          <textarea
            style={{ color: 'black' }}
            className="text-input"
            placeholder="Enter a prompt"
            onChange={(e) => setPrompt(e.target.value)}
            rows={5}
            cols={50}
          />
          <button style={{ marginLeft: 20 }} onClick={generateImage}>Generate Image</button>
        </div>
      }

      {resultArray.length > 0 ? (

        <div>
          {resultArray.map((item) => {
            return <img onClick={() => setSelectedImage(item.url)} className="result-images" src={item.url} alt="Generated Image" />
          })}
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}

export default AnimationApp;
