import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { context } from "../../context/PlantsContext";
import PropTypes from "prop-types";

const Suggestions = ({ start, end, text }) => {
  let { allPlants } = useContext(context);
  // console.log(allPlants);
  const displayedPlants = Array.isArray(allPlants)
    ? allPlants.slice(start, end)
    : [];
  // console.log(displayedPlants);

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-row justify-between p-5">
        <h2 className=" text-green-800 md:text-2xl xs:text-xl font-bold  mb-8">
          {text}
        </h2>

        <div className=" text-center">
          <Link
            to="/home/plants"
            className=" text-Black   hover:text-blue-500 transition duration-300 text-base sm:text-lg lg:text-xl"
          >
            See All Products
          </Link>
        </div>
      </div>
      <div className="container xs:mx-5 md:mx-auto px-6 ">
        {/* Grid for displaying plants */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-32 ">
          {displayedPlants.map((plant) => (
            <Card key={plant.id} plant={plant} />
          ))}
        </div>

        {/* See All Products link */}
      </div>
    </div>
  );
};

Suggestions.propTypes = {
  start: PropTypes.number.isRequired, // Must be a number and is required
  end: PropTypes.number.isRequired, // Must be a number and is required
  text: PropTypes.string.isRequired, // Must be a string and is required
};
export default Suggestions;
