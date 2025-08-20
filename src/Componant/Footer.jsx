import { Link } from "react-router";
import NavbarData from "../Data/NavbarData";
import SocialMediaData from "../Data/SocialMediaData";
import SvgData from "../Data/SvgData";

function Footer({ changeContent }) {
  return (
    <center>
      <div
        className=" bg-cover bg-center w-[90vw] h-80 rounded-3xl lg:rounded-full lg:m-10 lg:p-2 m-5 text-center text-white flex flex-col justify-center items-cente"
        style={{ backgroundImage: `url(../src/assets/images/FooterImage.jpg)` }}
      >
        <h1 className=" text-3xl sm:text-5xl xl:text-6xl font-bold  font-font_02 p-2">
          Sign up for exclusive offers from us
        </h1>
        <h1 className=" text-lg sm:text-xl xl:text-2xl font-font_01 p-2 xl:p-5 ">
          Stay connected and be the first to discover special offers, seasonal
          promotions, and handpicked travel experiences tailored just for you.
        </h1>
        <h1 className=" text-lg sm:text-xl xl:text-2xl font-font_01 p-2 xl:p-5 ">
          Enjoy insider access to member-only deals and unforgettable getaways,
          delivered straight to your inbox.
        </h1>
      </div>

      <div className=" font-font_03 p-7 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-start sm:gap-14 lg:gap-16 2xl:pl-20 2xl:text-gl">
        <div className="1">
          <h1 className=" font-bold font-font_01 my-3 2xl:my-4 text-2xl 2xl:text-4xl">
            Regal Crest
          </h1>
          <p>
            Discover a haven of comfort and elegance at Regal Crest, located in
            the heart of Colombo, Sri Lanka. We pride ourselves on offering
            exceptional service, luxurious rooms, exquisite dining, and
            unforgettable experiences for both business and leisure travelers.
          </p>
        </div>
        <ul className="2 lg:ml-20 2xl:ml-14">
          <li className=" font-bold font-font_01 my-3 2xl:my-4 text-2xl 2xl:text-4xl">
            Quick Links
          </li>
          {NavbarData.map((data) => (
            <li
              onClick={() => {
                changeContent(data.ChangeContent);
              }}
            >
              <Link to={data.Link}>{data.Name}</Link>
            </li>
          ))}
        </ul>
        <div className="3">
          <h1 className=" font-bold font-font_01 my-3 2xl:my-4 text-2xl 2xl:text-4xl">
            Our Location
          </h1>
          <div className="">
            <p>Regal Crest</p>
            <p>No. 25, Galle Face Road</p>
            <p>Colombo 03, 00300</p>
            <p>Sri Lanka</p>

            <br />
            <h1 className=" flex justify-start items-center gap-4 my-2">
              <span className=" text-3xl">{SvgData.Call}</span> Reservations:
              +94 11 234 5678
            </h1>
            <h1 className=" flex justify-start items-center gap-4 my-2">
              <span className=" text-3xl">{SvgData.Email}</span>Email:
              reservations@regalcrest.com
            </h1>
            <h1 className=" flex justify-start items-center gap-4 my-2">
              <span className=" text-2xl">{SvgData.Clock}</span> Check-in: 2:00
              PM | Check-out: 12:00 PM
            </h1>
          </div>
        </div>
        <div className="4">
          <h1 className=" font-bold font-font_01 my-3 2xl:my-4 text-2xl 2xl:text-4xl">
            Stay Connected
          </h1>
          <p>
            Follow us for exclusive offers, travel inspiration, and the latest
            updates:
          </p>
          <ul>
            {SocialMediaData.map((Data) => (
              <li>
                <a
                  href={Data.link}
                  className="flex justify-start items-center gap-4 my-2"
                >
                  <span className=" text-3xl">{Data.svg}</span>

                  {Data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="5">
          <h1 className=" font-bold font-font_01 my-3 2xl:my-4 text-2xl 2xl:text-4xl">
            Guest Services
          </h1>
          <ul>
            <li>24/7 Front Desk</li>
            <li>Airport Transfers</li>
            <li>Free Wi-Fi</li>
            <li>Concierge Services</li>
            <li>Room Service</li>
            <li>Laundry & Dry Cleaning</li>
          </ul>
        </div>
      </div>
    </center>
  );
}

export default Footer;
