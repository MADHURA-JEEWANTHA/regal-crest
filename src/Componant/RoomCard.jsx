import SvgData from "../Data/SvgData";
import { motion } from "motion/react"

function RoomCard({ item }) {
  return (
    <div className=" m-4 mx-8 shadow-2xl w-96 rounded-lg group ">
      <div
        className=" relative bg-cover bg-center  h-72 rounded-lg overflow-hidden flex items-center justify-center   "
        style={{
          backgroundImage: `url(Images/RoomImages/${item.ImageName})`,
        }}
      >

        <motion.div 
        initial={{x:-200}}
        animate={{x:-120}}
        transition={{duration:2,
          
        }}
        className=" absolute top-60 p-1 px-3 m-1 bg-white rounded-xl font-font_02 group-hover:opacity-0 duration-500">
          <h1 >{item.Category}</h1>
        </motion.div>

        <div className=" text-center bg-black text-white p-3 font-font_01 m-4 h-60 rounded-lg flex items-center justify-center leading-8 bg-opacity-0 group-hover:bg-opacity-70 duration-500">
<h1 className=" opacity-0 group-hover:opacity-100">{item.Description}</h1>
        </div>

      </div>
      <div className=" p-3">
        <div className=" flex justify-between items-center h-10 font-font_01 text-lg gap-3">
          <h1>$ {item.Rate} /night</h1>
          <h1 className=" flex justify-center items-center font-font_02 gap-2">
            {SvgData.star}
            {item.Review}
          </h1>
        </div>
        <div className=" flex justify-between items-center h-10 font-font_03 tracking-wider text-lg">
 <h1>{item.Name}</h1>
        </div>
        <div className=" flex justify-between items-center h-10 font-font_03 tracking-wider text-lg">
          <h1 className=" flex justify-center items-center font-font_02 gap-2">
            {SvgData.bed}
            {item.Bed} Bed
          </h1>
                    <h1 className=" flex justify-center items-center font-font_02 gap-2">
            {SvgData.Bath}
            {item.Bath} Bath
          </h1>
                    <h1 className=" flex justify-center items-center font-font_02 gap-2">
            {SvgData.sqft}
            {item.Sqft} Sqft
          </h1>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
