import React from "react";
import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";
import Hero from "../../utils/HeroSection/Hero";

const BulkGifting = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  w-[100vw] m-5">
        <Hero></Hero>
      </div>
      <Footer />
    </div>
  );
};

export default BulkGifting;
