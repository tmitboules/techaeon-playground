import React, { useState } from "react";
import "./animation-style.css";
import { useLottie } from "lottie-react";
import coin from "./../../../coin.json";
import edited from "./../../../edited.json";
import { useTechaeonDownloadProvider } from "../../../provider/techaeonDownloadProvider";

interface Props {
  frontSide: JSX.Element;
  backSide: JSX.Element;
  height: string | number;
  width: string | number;
}

function AnimationWrapper({ frontSide, backSide, height, width }: Props) {
  const options = {
    animationData: edited,
    loop: false,
    autoplay: false
  };
  const { View, play, stop } = useLottie(options);

  const { frontSideReference, backSideReference, downloadImage } =
    useTechaeonDownloadProvider();
  const [coinSide, setCoinSide] = useState("");
  const [isAnimationVisible, setIsAnimationVisible] = React.useState(false);

  const flipCoin = () => {
    setCoinSide(coinSide === "front" ? "back" : "front");
  };
  const handleAnimationButtonClick = () => {
    play()
    setIsAnimationVisible(true);
    setTimeout(() => {
      stop()
      setIsAnimationVisible(false);
    }, 6000);
  }

  const handleDownloadButtonClick = () => {
    //@ts-ignore
    const uri = frontSideReference.current.toDataURL();
    downloadImage(uri, "front.png");
    //@ts-ignore
    const uri2 = backSideReference.current.toDataURL();
    downloadImage(uri2, "back.png");
  }

  return (
    <div>
      <div
        className={`coin ${coinSide}`}
        onClick={flipCoin}
        style={{
          height: height,
          width: width,
        }}
      >
        <div>{View}</div>
        {
          isAnimationVisible && <div>{View}</div>
        }
        {
          !isAnimationVisible && <>
            <div className="front-side">{frontSide}</div>
            <div className="back-side">{backSide}</div></>
        }


      </div>
      <div className="mb-4 flex justify-center items-center">
        <button
          onClick={handleAnimationButtonClick}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Animate
        </button>

      </div>

      <div className="mb-4 flex justify-center items-center">
        <button
          onClick={handleDownloadButtonClick}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Download
        </button>

      </div>

    </div>
  );
}

export default AnimationWrapper;
