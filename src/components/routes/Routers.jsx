import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Plants from "../pages/product/Plants";
import BulkGifting from "../pages/bulk-gifting/BulkGifting";
import PlantCare from "../pages/plant-care/PlantCare";
import Signin from "../pages/signin/Signin";
import SignUp from "../pages/sign-up/SignUp";
import Hero from "../utils/HeroSection/Hero";
import PageNotFound from "../pages/error-page/PageNotFound";
import ProductDetails from "../utils/product-detail/ProductDetails";
import Cart from "../pages/cart/Cart";
import AddNewPlant from "../pages/addNewPlant/AddNewPlant";
import Wishlist from "../utils/wishlist/Wishlist";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Hero /> },
      { path: "plants", element: <Plants /> },
      { path: "bulk-gifting", element: <BulkGifting /> },
      { path: "plant-care", element: <PlantCare /> },
      { path: "plant-desc", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "add-plant", element: <AddNewPlant /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <SignUp /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routers = () => {
  return <div>Routers</div>;
};

export default Routers;
