import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";
import { useContext } from "react";
import { context } from "../../context/PlantsContext";

import { Outlet } from "react-router-dom";

const Home = () => {
  let allPlants = useContext(context);
  console.log(allPlants);
  return (
    <div>
      {/* here only necessary and constant things will be called and outlet will bring other  components dynamically  */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
