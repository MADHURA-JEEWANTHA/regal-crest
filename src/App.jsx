import { motion } from "motion/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Rootlayout from "./Layout/Rootlayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallary from "./pages/Gallary";
import Room from "./pages/Room";
import Contact from "./pages/contact";
import Blogs from "./pages/Blogs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blogs />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
