import { useState } from "react";
import PrimaryBtn from "../Componant/PrimaryBtn";
import GallaryImage from "../Data/GallaryImage";

function Gallary() {
  const [type, settype] = useState("garden");

  const toggle = (type) => {
    settype(type);
  };
  return (
    <div className=" flex flex-col items-center justify-center p-7  bg-cyan-100">
      <div className="lex items-center justify-center">
        <h1 className=" font-font_02 text-4xl font-bold text-center">
          Welcome to Our Gallery
        </h1>
        <p className=" font-font_01 text-xl text-center md:p-5 ">
          Discover the beauty and elegance of our hotel through a visual
          journey. Whether you’re seeking relaxation by the pool, comfort in our
          luxurious rooms, or the charm of our lush gardens, our gallery gives
          you a glimpse of the unforgettable experiences that await you.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <PrimaryBtn
          name={"Garden"}
          prop={() => {
            toggle("garden");
          }}
        />
        <PrimaryBtn
          name={"Room"}
          prop={() => {
            toggle("room");
          }}
        />
        <PrimaryBtn
          name={"Event"}
          prop={() => {
            toggle("event");
          }}
        />
      </div>
      <div className=" grid grid-cols-3 grid-rows-6 gap-2 lg:gap-7">
        <div
          className={`${
            type === "garden"
              ? "col-span-2 row-span-2"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96 "
              : "col-span-1 row-span-3  w-[28vw] lg:w-96"
          } duration-1000 bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_01}`
                : type === "room"
                ? `${GallaryImage.room.Room_01}`
                : `${GallaryImage.event.Event_01}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1 w-[28vw] lg:w-96 h-[28vw] lg:h-96"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96"
              : "col-span-2 row-span-1  h-[28vw] lg:h-96"
          } duration-1000   bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_02}`
                : type === "room"
                ? `${GallaryImage.room.Room_02}`
                : `${GallaryImage.event.Event_02}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1 w-[28vw]  lg:w-96 h-[28vw] lg:h-96"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96"
              : "col-span-1 row-span-2  w-[28vw] lg:w-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_03}`
                : type === "room"
                ? `${GallaryImage.room.Room_03}`
                : `${GallaryImage.event.Event_03}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1 w-[28vw] lg:w-96  h-[28vw] lg:h-96"
              : type === "room"
              ? "col-span-2 row-span-1 h-[28vw] lg:h-96"
              : "col-span-1 row-span-2  w-[28vw] lg:w-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_04}`
                : type === "room"
                ? `${GallaryImage.room.Room_04}`
                : `${GallaryImage.event.Event_04}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-2 row-span-2"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96"
              : "col-span-1 row-span-3  w-[28vw] lg:w-96 "
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_05}`
                : type === "room"
                ? `${GallaryImage.room.Room_05}`
                : `${GallaryImage.event.Event_05}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1 w-[28vw]  lg:w-96 h-[28vw] lg:h-96"
              : type === "room"
              ? "col-span-1 row-span-3 w-[28vw] lg:w-96"
              : "col-span-1 row-span-1  w-[28vw] lg:w-96  h-[28vw]  lg:h-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_06}`
                : type === "room"
                ? `${GallaryImage.room.Room_06}`
                : `${GallaryImage.event.Event_06}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-2 row-span-2"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96"
              : "col-span-1 row-span-2  w-[28vw] lg:w-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_07}`
                : type === "room"
                ? `${GallaryImage.room.Room_07}`
                : `${GallaryImage.event.Event_07}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1  w-[28vw] lg:w-96 h-[28vw] lg:h-96"
              : type === "room"
              ? "col-span-1 row-span-2 w-[28vw] lg:w-96 "
              : " col-span-1 row-span-2  w-[28vw] lg:w-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_08}`
                : type === "room"
                ? `${GallaryImage.room.Room_08}`
                : `${GallaryImage.event.Event_08}`
            })`,
          }}
        ></div>
        <div
          className={`${
            type === "garden"
              ? "col-span-1 row-span-1  w-[28vw] lg:w-96 h-[28vw] lg:h-96"
              : type === "room"
              ? " col-span-1 row-span-1 w-[28vw] h-[28vw]  lg:w-96 lg:h-96"
              : "col-span-1 row-span-1  w-[28vw] lg:w-96 h-[28vw] lg:h-96"
          } duration-1000  bg-cover bg-center shadow-2xl shadow-black rounded-lg`}
          style={{
            backgroundImage: `url(${
              type === "garden"
                ? `${GallaryImage.garden.Garden_09}`
                : type === "room"
                ? `${GallaryImage.room.Room_09}`
                : `${GallaryImage.event.Event_09}`
            })`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Gallary;
