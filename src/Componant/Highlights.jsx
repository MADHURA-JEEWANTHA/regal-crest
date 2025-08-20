
import HighlightsActiveSlider from "./HighlightsActiveSlider";


function Highlights() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <h1 className=" text-4xl lg:text-6xl font-font_01 mb-4">
          — HIGHLIGHTS —
        </h1>
        <div className=" md:w-1/2 p-4 md:p-10 ">
          <h4 className=" font-bold font-font_03">
            Where Splendor Meets the Sea
          </h4>
          <p className=" font-font_03 text-xl">
            Cradled on a scenic coastal bluff, Regal Crest offers a front-row
            seat to nature’s grandeur. With golden sands stretching endlessly
            and world-class amenities designed for indulgence, every stay
            becomes a story worth telling.
          </p>
        </div>
      </div>
  <HighlightsActiveSlider/>
    </>
  );
}

export default Highlights;
