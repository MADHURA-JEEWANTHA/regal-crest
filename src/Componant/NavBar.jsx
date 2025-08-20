import PrimaryBtn from "./PrimaryBtn";
import SvgData from "../Data/SvgData";
import NavbarData from "../Data/NavbarData";
import { Link } from "react-router";
import { useState } from "react";
import {motion}  from "motion/react";

function NavBar({ changeContent }) {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="  items-center justify-around pt-8 flex  relative">
      <div>
        <img src={SvgData.Logo} alt=" Logo" className=" w-16 px-2" />
      </div>
      <ul className=" hidden sm:flex ">
        {NavbarData.map((data) => (
          <li
            onClick={() => {
              changeContent(data.ChangeContent);
            }}
          >
            <PrimaryBtn name={data.Name} link={data.Link} />
          </li>
        ))}
      </ul>
      <div className="flex  sm:hidden">
        {!menuOpen && (
          <Link
            className="text-lg py-2 px-5 bg-slate-50  m-4  rounded-2xl bg-opacity-80 hover:bg-opacity-100 duration-700 font-font_01"
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            {SvgData.menuIcon}
          </Link>
        )}
        {menuOpen && (
          <Link
            className="text-lg py-2 px-5 bg-slate-50  m-4  rounded-2xl bg-opacity-80 hover:bg-opacity-100 duration-700 font-font_01"
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            {SvgData.closeIcon}
          </Link>
        )}
      </div>

      <motion.ul
        animate={{ left: menuOpen ? 5 : undefined }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-80  absolute top-10 -left-[400px] w-2/4 font-font_02 rounded-2xl  sm:hidden"
      >
        {NavbarData.map((data) => (
          <li
            onClick={() => {
              changeContent(data.ChangeContent);
            }}
            className="p-3 border-2 border-gray-200 rounded-2xl"
          >
            <Link to={data.Link}>{data.Name}</Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default NavBar;
