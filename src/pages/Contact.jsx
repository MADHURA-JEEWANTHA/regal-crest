import ImageData from "../Data/ImageData";

function Contact() {
  return (
    <div className="p-6 md:flex md:flex-col md:justify-center md:items-center w-screen">
      <div className="p-6 md:flex md: justify-around md:items-center md:gap-2 xl:gap-6 w-full">
        <div>
          <h1 className=" text-4xl font-font_02 font-bold">
            We’d Love to Hear from You
          </h1>
          <div className=" flex flex-col">
            <label
              htmlFor="name"
              className=" text-lg font-font_03 font-bold py-2"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              className=" border border-yellow-700 p-2"
            />
          </div>

          <div className=" flex flex-col">
            <label
              htmlFor="email"
              className=" text-lg font-font_03 font-bold py-2"
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              className=" border border-yellow-700 p-2"
            />
          </div>

          <div className=" flex flex-col">
            <label
              htmlFor="massage"
              className=" text-lg font-font_03 font-bold py-2"
            >
              Your Massage
            </label>
            <textarea
              name=""
              id="massage"
              className=" border border-yellow-700 p-2"
            ></textarea>
          </div>

          <button className=" w-full p-3 bg-yellow-600 mt-6">Submit</button>
        </div>
        <img
          src={ImageData.Contact01}
          alt="Contact"
          className=" w-[90vw] mx-auto mt-5 md:w-[35vw]"
        />
      </div>
      <div className=" p-7 md:flex md:justify-center md:items-center  md:gap-2 xl:gap-6">
        <div className=" md:order-2">
          <div className="p-5">
            <h1 className=" text-3xl font-font_02 font-bold">Get in Touch</h1>
            <ul className="text-xl font-font_01">
              <li className="pt-3">Open Hours: Monday – Sunday</li>
              <li className="pt-3">Telephone: +1 250 555 0199</li>
              <li className="pt-3">Fax: +1 250 555 0199</li>
              <li className="pt-3">Email: info@moonlit.com</li>
            </ul>
          </div>
          <div className="p-5">
            <h1 className=" text-3xl font-font_02 font-bold">Visit Us</h1>
            <ul className="text-xl font-font_01">
              <li className="pt-3">
                Address: The Ritz-Carlton, California, Sri Lanka
              </li>
              <li className="pt-3">
                Location: Nestled in the heart of Sri Lanka’s natural beauty,
                offering breathtaking views and world-class hospitality.
              </li>
            </ul>
          </div>
        </div>

        <img
          src={ImageData.Contact02}
          alt="Contact"
          className=" w-[90vw] mx-auto mt-5 md:w-[35vw] md:order-1"
        />
      </div>
    </div>
  );
}

export default Contact;
