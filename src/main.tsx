import React from "react";
import ReactDOM from "react-dom/client";
import AnimationApp from "./AnimationApp";
import App from "./App";
import "./index.css";
import { TechaeonDownloadProvider } from "./provider/techaeonDownloadProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TechaeonDownloadProvider>
        <App />
    </TechaeonDownloadProvider>
    
    {/* <TechaeonDownloadProvider>
      <AnimationApp></AnimationApp>
    </TechaeonDownloadProvider> */}
  </React.StrictMode>
);
