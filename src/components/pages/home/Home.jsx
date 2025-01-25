import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";

import { Outlet } from "react-router-dom";

const Home = () => {
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
