import React from "react";

export default function techaeonDownloadHooks() {

  const frontSideReference = React.useRef();
  const backSideReference = React.useRef();

  const downloadImage = (uri: any, name: any) => {
    console.log("Image Downloading...")
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return {
    frontSideReference,
    backSideReference,
    downloadImage
  };
}

export type TechaeonDownloadReturnType = ReturnType<typeof techaeonDownloadHooks>;
