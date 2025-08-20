import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import CommentsData from "../Data/CommentsData";

function Comments() {
  return (
    <div className=" my-6 py-6 lg: ml-5 2xl:ml-7">
      <h1 className=" text-4xl font-font_02 font-bold p-4 pb-0 md:text-5xl lg:text-6xl ">
        What they say about us...
      </h1>

      <div className="flex items-center justify-center flex-col ">
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[95%] lg:max-w-[80%]"
        >
          {CommentsData.map((Data, index) => (
            <SwiperSlide key={index}>
              <div className=" font-font_02 p-3">
                <p className=" pb-2 lg:pb-4 text-xl italic md:text-2xl lg:text-3xl xl:text-4xl">
                  <span className=" text-8xl font-font_02 text-[#15363d] xl:text-9xl">
                    "
                  </span>
                  {Data.comment}
                </p>
                <h2 className=" font-bold text-2xl p-3 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  — {Data.name}
                </h2>
                <div className=" flex items-center gap-5">
                  <img
                    src={`Images/CommentsImages/${Data.imageName}`}
                    alt="Emily_Carter"
                    className=" rounded-full w-14 md:w-20 lg:w-28"
                  />
                  <p className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {Data.type}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Comments;
