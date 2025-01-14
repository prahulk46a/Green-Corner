import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Plants from "../pages/product/Plants";
import BulkGifting from "../pages/bulk-gifting/BulkGifting";
import Offer from "../pages/offers/Offer";
import PlantCare from "../pages/plant-care/PlantCare";
import Signin from "../pages/signin/Signin";
import SignUp from "../pages/sign-up/SignUp";

export let routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/plants",
    element: <Plants />,
  },
  {
    path: "/bulk-gifting",
    element: <BulkGifting />,
  },
  {
    path: "/plant-care",
    element: <PlantCare />,
  },
  {
    path: "/offer",
    element: <Offer />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
const Routers = () => {
  return <div>Routers</div>;
};

export default Routers;
