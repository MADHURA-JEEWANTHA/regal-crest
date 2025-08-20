import ImageData from "../Data/ImageData";
import { motion } from "motion/react"
import { useMediaQuery } from "react-responsive";

function WelcomeDiv() {
   const ScreenSizeOK = useMediaQuery({ query: "(min-width: 1280px)" });
  return (
    <div className=" p-5 xl:flex xl:justify-center xl:items-center gap-10 xl:mt-10">
      <div className=" p-1 xl:w-[40vw]">
        <h1 className=" font-font_02 tracking-wider text-yellow-600 text-sm md:text-2xl xl:text-4xl">
          WELCOME TO REGAL CREST
        </h1>
        <h1 className=" font-font_01 tracking-wider text-lg md:text-2xl xl:text-3xl ">
          Where Elegance Lives and Legends Begin
        </h1>
        <h1 className=" font-font_02 tracking-wider text-md md:text-3xl xl:text-4xl font-bold">
          More than 20 years of unforgettable stays, timeless service, and
          lasting memories.
        </h1>
        <h1 className=" font-font_03  text-sm md:text-xl xl:text-2xl tracking-widest ">
          Nestled in the heart of tranquility, Regal Crest isn't just a hotel —
          it's a destination where sophistication meets serenity. Every hallway,
          every suite, every sunset view tells a story of excellence shaped by
          decades of dedication.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-2 md:mt-6 xl:gap-6">
        <motion.img 
         animate={ScreenSizeOK ?{ y: [0,-20, 0, 20,0] }:false }
         transition={{duration:15,
          repeat: Infinity,
          ease: "easeInOut"
         }}
        src={ImageData.WImage01} alt="Welcome Image 01" className=" w-[80vw] md:w-[40vw] xl:w-[20vw]  p-5 mx-auto shadow-2xl "/>
        <motion.img 
        animate={ScreenSizeOK ?{ y: [0,-20, 0, 20,0] }:false}
         transition={{duration:15,
          repeat: Infinity,
          ease: "easeInOut"
         }}src={ImageData.WImage02} alt="Welcome Image 02" className=" w-[80vw] md:w-[40vw] xl:w-[20vw] p-5 mx-auto shadow-2xl    md:-mb-10 md:mt-10"/>

      </div>
    </div>
  );
}

export default WelcomeDiv;
