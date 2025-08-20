import RoomData from "../Data/RoomData";
import RoomCard from "./RoomCard";

function RoomsDiv() {
  return (
    <div className=" py-5 md:py-32">
      <center>
        <h1 className="uppercase font-font_01 ">Rooms & Suites</h1>
        <p className=" font-font_02 text-3xl">Luxury Rooms & Suites</p>
      </center>

      <div className=" flex flex-wrap gap-10 justify-center mt-10">
        {RoomData.map((item, index) => (
          <RoomCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default RoomsDiv;
