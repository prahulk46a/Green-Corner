import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { context } from "../../context/PlantsContext";

const Suggestions = () => {
  let { allPlants } = useContext(context);
  console.log(allPlants);
  const displayedPlants = Array.isArray(allPlants)
    ? allPlants.slice(6, 10)
    : [];
  console.log(displayedPlants);

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Heading */}
      <h2 className=" text-green-800 text-2xl sm:text-3xl font-bold  mb-8">
        Newly Launched
      </h2>

      {/* Grid for displaying plants */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {displayedPlants.map((plant) => (
          <Card key={plant.id} plant={plant} />
        ))}
      </div>

      {/* See All Products link */}
      <div className="mt-8 text-center">
        <Link
          to="/plants"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-base sm:text-lg lg:text-xl"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Suggestions;
