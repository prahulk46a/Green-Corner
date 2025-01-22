import hero from "../../../assets/hero-Photoroom.png";
import { useNavigate } from "react-router-dom";
import Suggestions from "../suggestions/Suggestions";
import SortByCategory from "../../pages/SortByCategory/SortByCategory";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home/plants");
  };
  return (
    <div>
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
          className="absolute md:top-[78%] md:left-[72%] top-[78%] left-[72%] py-3 px-6 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white xl:text-lg rounded-md shadow-lg xs:py-1 xs:px-3 sm:py-2 sm:px-4 hover:bg-green-800 transition duration-300"
        >
          Explore More
        </button>
      </section>

      <div className="md: w-[97vw]  mx-5 py-5 rounded-full md:text-2xl sm:text-lg text-green-700  font-bold flex justify-center items-center shadow-md bg-slate-200 overflow-x-hidden">
        Get 20% off on order above @3999
      </div>

      <div className="my-5 mx-4 rounded-sm bg-slate-200 shadow-lg">
        <Suggestions />
      </div>

      <SortByCategory />

      <div className="my-5 mx-4 rounded-sm bg-slate-200 shadow-lg h-[500px]"></div>
    </div>
  );
};

export default Hero;
