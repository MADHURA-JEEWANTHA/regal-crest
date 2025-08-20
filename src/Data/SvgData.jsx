import Logo from "../assets/SVG/logo.svg";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { GiBed } from "react-icons/gi";
import { MdOutlineBathroom } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { SiTripadvisor } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const SvgData = {
  Logo,
  menuIcon: <TfiLayoutMenuV />,
  closeIcon: <GrClose />,
  star: <IoStar className=" text-yellow-300" />,
  bed: <GiBed />,
  Bath: <MdOutlineBathroom />,
  sqft: <RxDimensions />,

  Facebook: <FaFacebook />,
  Instagram: <FaInstagramSquare />,
  Twitter: <FaTwitter />,
  Youtub: <IoLogoYoutube />,
  Tripadvisor: <SiTripadvisor />,
  Call: <IoCall />,
  Email: <MdAttachEmail />,
  Clock: <FaRegClock />,
};

export default SvgData;
