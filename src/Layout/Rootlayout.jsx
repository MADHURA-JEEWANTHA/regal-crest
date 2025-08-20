import { Outlet } from "react-router";
import Heder from "../Componant/Heder";
import { useState } from "react";
import Footer from "../Componant/Footer";

function Rootlayout() {
  const [content, setcontent] = useState("Regal Crest");
  const changeContent = (Txt) => {
    setcontent(Txt);
  };
  return (
    <>
      <Heder changeContent={changeContent} content={content} />
      <Outlet />
      <Footer changeContent={changeContent}  />
    </>
  );
}

export default Rootlayout;
