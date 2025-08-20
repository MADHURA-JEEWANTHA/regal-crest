import NavBar from "./NavBar";
import ImageData from "../Data/ImageData";

function Heder({ content, changeContent }) {
  return (
    <div
      className="bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${ImageData.BgImage})` }}
    >
      <NavBar changeContent={changeContent} />
      <div className=" flex w-screen h-3/4 justify-center items-center">
        <h1 className=" text-white font-font_02 text-8xl md:text-9xl font-bold text-shadow-lg ">
          {content}
        </h1>
      </div>
    </div>
  );
}

export default Heder;
