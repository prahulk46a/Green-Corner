import React from "react";
import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[500px]">Home Page</div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
