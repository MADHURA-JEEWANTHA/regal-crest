import ImageData from "../Data/ImageData";
import PrimaryBtn from "../Componant/PrimaryBtn";

function Phtos() {
  return (
    <div className="flex justify-center md:mt-36 p-5">
      <div className=" grid grid-cols-4  grid-rows-4 gap-1 lg:gap-10">
        <div
          className="row-span-2 col-span-2 bg-cover bg-center shadow-2xl shadow-black rounded-lg flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${ImageData.Main})` }}
        >
          <div className="flex flex-col justify-center items-center h-5/6 w-5/6 bg-black bg-opacity-40">
            <h1 className=" 2xl:text-5xl font-bold font-font_02 text-white">
              Experience Regal Crest
            </h1>
            <p className=" hidden md:flex max-w-2xl text-sm lg:text-xl font-font_03 px-9 py-3 text-yellow-50 text-center">
              From breathtaking views to luxurious comforts, every moment at
              serene poolside, gourmet dining spaces, and vibrant surroundings.
            </p>
            <PrimaryBtn link={"/Gallary"} name={"View Gallery"} />
          </div>
        </div>

        <div
          className="row-span-2 bg-cover bg-center  rounded-lg"
          style={{ backgroundImage: `url(${ImageData.portrait_1})` }}
        ></div>
        <div className="bg-black text-center w-[20vw] h-[20vw] rounded-lg shadow-2xl shadow-black text-white flex flex-col justify-center items-center p-5">
          <h1 className=" text-xl lg:text-3xl font-font_02">Morning Bliss</h1>
          <p className="  hidden md:flex text-xs lg:text-xl font-font_01">
            Start your day with fresh coffee and local flavors.
          </p>
        </div>
        <div
          className="bg-cover bg-center w-[20vw] h-[20vw] rounded-lg"
          style={{ backgroundImage: `url(${ImageData.small1})` }}
        ></div>

        <div
          className="row-span-2 bg-cover bg-center rounded-lg "
          style={{ backgroundImage: `url(${ImageData.portrait_2})` }}
        ></div>
        <div className="bg-black text-center w-[20vw] h-[20vw] rounded-lg shadow-2xl shadow-black text-white flex flex-col justify-center items-center p-5">
          <h1 className=" text-xl lg:text-3xl font-font_02">
            Seamless Check-In
          </h1>
          <p className="  hidden md:flex text-xs lg:text-xl font-font_01">
            Fast, friendly, and stress-free arrivals.
          </p>
        </div>

        <div
          className="col-span-2 bg-cover bg-center  rounded-lg"
          style={{ backgroundImage: `url(${ImageData.landscape1})` }}
        ></div>

        <div
          className="col-span-2 bg-cover bg-center  rounded-lg"
          style={{ backgroundImage: `url(${ImageData.landscape2})` }}
        ></div>

        <div
          className="bg-cover bg-center w-[20vw] h-[20vw] rounded-lg shadow-2xl shadow-black"
          style={{ backgroundImage: `url(${ImageData.small2})` }}
        ></div>
      </div>
    </div>
  );
}

export default Phtos;
