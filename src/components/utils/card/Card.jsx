import React from "react";

const Card = ({ plant }) => {
  return (
    <div className="bg-slate-200 shadow-lg m-5 p-2 rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-[310px] py-3 min-h-96 flex flex-col">
      <img
        src={`${plant.primaryImage}`}
        alt={plant.name}
        className="w-full h-[175px] object-cover rounded-md "
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-green-700">{plant.name}</h3>
        <h3 className="text-lg font-semibold text-green-700">₹{plant.price}</h3>
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Sunlight:</span>{" "}
            {plant.sunlightRequirement}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-800">Moisture:</span>{" "}
            {plant.moistureRequirement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
