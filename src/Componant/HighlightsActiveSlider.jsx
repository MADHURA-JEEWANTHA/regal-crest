import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


import { FreeMode, Pagination } from "swiper/modules";

import HighlightsData from "../Data/HighlightsData";


const HighlightsActiveSlider = () => {
  return (

      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1536:{
             slidesPerView: 3,
            spaceBetween: 10,
          }
         
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {HighlightsData.map((item,index) => (
          <SwiperSlide key={index}>
          
              {/* <div className=" m-4 mx-8 shadow-2xl w-96 rounded-lg group relative "> */}
              <div className=" m-1 2xl:m-5 md:m-2 shadow-2xl w-[86vw] md:w-[40vw] 2xl:w-[25vw] rounded-lg group relative ">


                <div
                  className=" relative bg-cover bg-center  h-72 rounded-lg overflow-hidden flex items-center justify-center   "
                  style={{
                    backgroundImage: `url(Images/HighlightImages/${item.ImageName})`,
                  }}
                ></div>
                <div  className=" h-72 absolute bottom-96 group-hover:bottom-0 duration-700 rounded-lg bg-slate-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-70 "
              >
                  <h1 className=" text-center font-font_01 text-3xl">{item.Name}</h1>
                   <h1 className=" text-center font-font_02 text-lg">{item.Description}</h1>
                </div>
              </div>
       
         
          </SwiperSlide>
        ))}
      </Swiper>

  );
};

export default HighlightsActiveSlider;
