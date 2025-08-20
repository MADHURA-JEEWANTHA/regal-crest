import { Link } from "react-router";

function PrimaryBtn({ name, link ,prop }) {
  return (
    <Link
      className="text-sm md:text-lg py-2 px-2 md:px-5 bg-slate-50  m-2 md:m-4  rounded-3xl bg-opacity-80 hover:bg-opacity-100 duration-700 font-font_01"
      to={link}
      onClick={prop}
    >
      {name}
    </Link>
  );
}

export default PrimaryBtn;
