import BlogData from "../Data/BlogData";

function Blogs() {
  return (
    <div>
      <div className=" p-5 md:flex md:justify-center md:items-center  ">
        <div className=" md:w-[100vw]">
          <h3 className=" font-font_02 text-yellow-600 xl:text-2xl">
            Our Blogs
          </h3>
          <h1 className=" text-3xl font-font_01 xl:text-5xl">
            Our News & Articles
          </h1>
        </div>

        <div className=" font-font_03 mt-2 md:text-lg lg:text-xl xl:text-2xl  2xl:text-3xl">
          <p>
            Stay updated with the latest stories, travel tips, and exclusive
            insights from Regal Crest. Whether you’re planning your next
            getaway, discovering hidden gems, or looking for luxury travel
            inspiration, our blog is here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="m-4 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-5">
        {BlogData.map((data) => (
          <div
            className={`w-[90vw] h-96 bg-cover bg-center p-2 relative ${data.class}`}
            style={{ backgroundImage: `url(${data.Image})` }}
          >
            <div
              className={`absolute bottom-5 bg-black w-[85vw] md:w-[40vw] xl:w-[20vw] ${data.Special_Class} bg-opacity-40 p-4 text-white left-1/2 -translate-x-1/2`}
            >
              <h1 className=" text-3xl font-font_02 font-bold ">
                {data.Heading}
              </h1>
              <p className=" text-xl font-font_01 ">{data.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
