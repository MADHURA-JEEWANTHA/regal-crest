import Comments from "../Componant/comments";
import Experience from "../Componant/Experience";
import Highlights from "../Componant/Highlights";
import Phtos from "../Componant/Phtos";
import RoomsDiv from "../Componant/RoomsDiv";
import WelcomeDiv from "../Componant/WelcomeDiv";

function Home() {
  return (
    <div>
      <WelcomeDiv />
      <Phtos/>
      <RoomsDiv />
      <Highlights />
      <Experience />
      <Comments />
    </div>
  );
}

export default Home;
