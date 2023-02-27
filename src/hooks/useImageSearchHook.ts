import { Configuration, ImagesResponseDataInner, OpenAIApi } from 'openai';
import { useEffect, useState } from "react";
import { useFilePicker } from "use-file-picker";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})
const maxTechaeonSize = 256

export default function useImageSearchHook() {
  const openai = new OpenAIApi(configuration);
  const [imageSearchLoading, setImageSearchLoading] = useState(false);
  const [searchedImages, setSearchedImages] = useState<ImagesResponseDataInner[]>([]);
  const [selectedImage, setSelectedImage] = useState('')

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

  return {
    generateImageOnString,
    searchedImages,
    imageSearchLoading,
    openFileSelector,
    selectedImage
  };
}
