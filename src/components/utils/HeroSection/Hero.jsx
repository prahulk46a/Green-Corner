import { useNavigate } from "react-router-dom";
import Suggestions from "../suggestions/Suggestions";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home/plants");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="relative flex  justify-center items-center w-full px-2 pb-2  ">
        {/* Fullscreen Background Image */}
        <img
          src="https://www.pickmyflowers.com/assets/imgs/new/nurserylive-home-page-banner.webp"
          alt="Hero Plants"
          className="relative w-[100%] rounded-md  shadow-xl m-2 -z-10 "
        />

        {/* Shop Now Button */}
        <button
          onClick={handleClick}
          className="absolute md:top-[75%] md:left-[72%] top-[75%] left-[72%] py-3 px-6 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white xl:text-lg rounded-md shadow-lg xs:py-1  xs:px-3 xs:text-xs sm:py-2 sm:px-4 hover:bg-green-800 transition duration-300"
        >
          Explore More
        </button>
      </section>

      <div className="md: w-[98%]  py-5 rounded-full md:text-2xl sm:text-lg text-green-700  font-bold flex justify-center items-center shadow-sm bg-slate-100 overflow-x-hidden">
        Get 20% off on order above @3999
      </div>

      <div className=" w-[98%] my-5 rounded-sm  bg-slate-100 shadow-sm">
        <Suggestions start={6} end={11} text={"Newly Launched"} />
      </div>

      <div className="w-[98%] my-5 mx-4 rounded-sm  bg-slate-100 shadow-sm ">
        <Suggestions start={20} end={30} text={"All Products"} />
      </div>
    </div>
  );
};

export default Hero;
