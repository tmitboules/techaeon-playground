
import React, { createContext, useContext } from "react";
import techaeonDownloadHooks, { TechaeonDownloadReturnType } from "../hooks/techaeonDownloadHooks";

const initialContext: TechaeonDownloadReturnType = {
  frontSideReference: undefined,
  backSideReference: undefined,
  downloadImage: (point: number) => {}
};

export const techaeonDownloadContext =
  createContext<TechaeonDownloadReturnType>(initialContext);

export const useTechaeonDownloadProvider = () => useContext(techaeonDownloadContext);

interface Prop {
  children: React.ReactNode;
}

export const TechaeonDownloadProvider = (prop: Prop) => {
  // this hook is used for signalR connection and initialization of signalR

  const value = techaeonDownloadHooks();

  return (
    <techaeonDownloadContext.Provider value={value}>
      {prop.children}
    </techaeonDownloadContext.Provider>
  );
};
