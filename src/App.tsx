import { Backdrop, CircularProgress, Link } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ImagesResponseDataInner } from "openai";
import { useEffect } from "react";

import ColorButton from "./components/ColorButtons";
import ShapeButton from "./components/ShapeButtons";
import SiteHeader from "./components/SiteHeader";
import TechaeonCoin3 from "./components/TechaeonCoin3";
import TechaeonCoin3BackSide from "./components/TechaeonCoin3BackSide";
import useAIImageHook from "./hooks/useAIImageHook";
import useImageSearchHook from "./hooks/useImageSearchHook";
import useTechaeonParams, {
  ShapeKeys,
  techaeonColors,
  techaeonShapes,
} from "./hooks/useTechaeonParams";
import { convertBase64ImagetoURL } from "./utils";

function App() {
  const {
    shape,
    setShape,
    color,
    setColor,
    img,
    setImg,
    setShowImageSearchOption,
    showImageSearchOption,
  } = useTechaeonParams();

  const {
    generateImageOnString,
    searchedImages,
    openFileSelector,
    selectedImage,
    setSelectedImage,
    searchedPrompt,
    setSearchedPrompt,
    imageSearchLoading,
    setSearchedImages,
  } = useImageSearchHook();

  const {
    setEventDetailsVisible,
    eventDetailsVisible,
    setEventDetails,
    eventName,
    eventDetails,
    setEventName,
    callChatGPTAPI,
    chatGPTSearchText,
    setChatGPTSearchText,
    getImagesFromDreamStudio,
    searchedBase64Images,
  } = useAIImageHook();

  useEffect(() => {
    setImg(selectedImage);
  }, [selectedImage]);

  // console.log("length:::", searchedBase64Images.length);

  const ImageItem = (item: ImagesResponseDataInner) => {
    return (
      <Link sx={{ ":hover": { cursor: "pointer" } }}>
        <img
          onClick={() => {
            item.url && setSelectedImage(item.url);
          }}
          style={{ height: 180, width: 180 }}
          className="result-images"
          src={item.url}
          alt="Generated Image"
        />
      </Link>
    );
  };

  const ImageItemWithBase64 = (base64: string) => {
    return (
      <Link sx={{ ":hover": { cursor: "pointer" } }}>
        <img
          onClick={async () => {
            const convertedFile = await convertBase64ImagetoURL(base64);
            setSelectedImage(convertedFile);
          }}
          style={{ height: 180, width: 180 }}
          className="result-images"
          src={`data:image/png;base64, ${base64}`}
          alt="Generated Image"
        />
      </Link>
    );
  };

  const renderDreamSearchEventView = () => {
    if (!eventDetailsVisible) {
      return <></>;
    }

    return (
      <div style={{ marginBottom: 10 }}>
        <div className="flex gap-2 flex-1 mt-10">
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            type="text"
            id="event_name_input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Event Name"
            required
          />

          <input
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            type="text"
            id="evnet_description_input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Event Details"
            required
          />

          <button
            onClick={async () => {
              const data = await callChatGPTAPI(
                `give me an image prompt for Dream Studio that would produce an awesome image for an event called ${eventName}. The event is described as ${eventDetails}`
              );
              console.log("data:::", data);
            }}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get Search String
          </button>
        </div>
        <div className="flex gap-2 flex-1 mt-10">
          <textarea
            value={chatGPTSearchText}
            onChange={(e) => setChatGPTSearchText(e.target.value)}
            // type="text"
            id="chat_search_image_input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Image"
            required
          ></textarea>

          <button
            onClick={() => {
              getImagesFromDreamStudio(chatGPTSearchText);
            }}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>

        {searchedBase64Images.length > 0 ? (
          <div style={{ margin: 10 }}>
            <Grid2 container gap={2} columns={3}>
              {searchedBase64Images.map((item) => {
                return ImageItemWithBase64(item);
              })}
            </Grid2>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <main>
      <SiteHeader />
      <div style={{ marginLeft: 20 }} className="flex">
        <section className="flex-1">
          {/* shape buttons */}
          <div className="flex gap-2">
            {Object.entries(techaeonShapes).map(([name, path]) => (
              <ShapeButton
                key={name}
                path={path}
                name={name}
                clickHandler={() => setShape(techaeonShapes[name as ShapeKeys])}
                selected={shape == path ? true : false}
              />
            ))}
          </div>
          {/* color buttons */}
          <div className="flex gap-2 flex-1 mt-10">
            {Object.entries(techaeonColors).map(([name, colorr]) => (
              <ColorButton
                key={name}
                name={name}
                color={colorr}
                clickHandler={() => setColor(colorr)}
                selected={color == colorr ? true : false}
              />
            ))}
          </div>

          <div className="flex gap-2 flex-1 mt-10">
            <button
              onClick={() => {
                openFileSelector();
                setShowImageSearchOption(false);
                setSearchedPrompt("");
                setSearchedImages([]);
              }}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Pick Image From Gallery
            </button>

            <button
              onClick={() => {
                setShowImageSearchOption(
                  (showImageSearchOption) => !showImageSearchOption
                );
                setEventDetailsVisible(false);
              }}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Generate DALL-E Image
            </button>
            <button
              onClick={() => {
                setShowImageSearchOption(false);
                setEventDetailsVisible(
                  (eventDetailsVisible) => !eventDetailsVisible
                );
              }}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Generate Dream Studio Image
            </button>
          </div>

          {renderDreamSearchEventView()}

          {showImageSearchOption ? (
            <div style={{ marginBottom: 10 }}>
              <div className="flex gap-2 flex-1 mt-10">
                <input
                  value={searchedPrompt}
                  onChange={(e) => setSearchedPrompt(e.target.value)}
                  type="text"
                  id="search_image_input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Image"
                  required
                ></input>

                <button
                  onClick={() => {
                    generateImageOnString(searchedPrompt);
                  }}
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>

              {imageSearchLoading ? (
                <Backdrop open>
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : (
                <></>
              )}

              {searchedImages.length > 0 ? (
                <div style={{ margin: 10 }}>
                  <Grid2 container gap={2} columns={3}>
                    {searchedImages.map((item) => {
                      return ImageItem(item);
                    })}
                  </Grid2>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </section>

        <div className="w-full flex-1 flex flex-col items-center gap-4">
          <div>
            <TechaeonCoin3 image={img} 
              shape={shape} 
              color={color} 
              scale={0.8} />
          </div>
          <div className="m-[5rem]">
            <TechaeonCoin3BackSide
              image={img}
              shape={shape}
              color={color}
              scale={0.8}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
