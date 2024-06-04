import "../App.scss";
import Home from "./Home/Home";
import About from "./About/About";
import Photographer from "./Photographer/Photographer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./404/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Photographer/:photographerId",
    element: <Photographer />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
