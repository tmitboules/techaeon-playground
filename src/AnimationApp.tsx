import SiteHeader from "./components/SiteHeader";
import TechaeonCoin, { Shapes } from "./components/TechaeonCoin";
import { useTechaeonDownloadProvider } from "./provider/techaeonDownloadProvider";

function AnimationApp() {
  const { frontSideReference, backSideReference, downloadImage } =
    useTechaeonDownloadProvider();

  const handleExport = () => {
    //@ts-ignore
    const uri = frontSideReference.current.toDataURL();
    downloadImage(uri, "front.png");
    //@ts-ignore
    const uri2 = backSideReference.current.toDataURL();
    downloadImage(uri2, "back.png");
  };

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
        <button onClick={handleExport}>Download Image</button>
        <TechaeonCoin
          shape={Shapes.square}
          color={{ r: 255, g: 194, b: 38 }}
          scale={1}
          branding={"AEONPASS TECHAEON"}
          imageUrl="https://konvajs.org/assets/lion.png"
        />
      </div>
    </main>
  );
}

export default AnimationApp;
