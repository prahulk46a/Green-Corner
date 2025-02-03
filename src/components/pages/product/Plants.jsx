import { context } from "../../context/PlantsContext";
import { useContext, useEffect, useState } from "react";
import Card from "../../utils/card/Card";

const Plants = () => {
  //To scroll directly on top firstly if navigated from certain page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useContext(context);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filter Button for Mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600"
        >
          Filters
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          showSidebar ? "block" : "hidden"
        } fixed md:relative top-0 left-0 md:min-w-[20%] max-h-screen p-6 bg-gray-50 rounded-xl shadow-lg m-4 border border-gray-200 z-20 md:block`}
        style={{ height: "calc(100vh - 2rem)", overflowY: "auto" }} // Fixed height and vertical scroll
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Filters</h3>

        {/* Sunlight Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Sunlight</h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Low
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Moderate
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            High
          </label>
        </div>

        {/* Water Requirements Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">
            Water Requirements
          </h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Weekly
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Bi-weekly
          </label>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Rating</h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />1 Star
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />2 Stars
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />3 Stars
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />4 Stars
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />5 Stars
          </label>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Price</h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input
              type="range"
              className="w-full bg-gray-200 rounded-lg h-2 cursor-pointer"
              min="0"
              max="100"
            />
            <span className="text-gray-500 text-xs">Price Range</span>
          </label>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">
            Availability
          </h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Available
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Not Available
          </label>
        </div>

        {/* Season Growth Rate Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">
            Season Growth Rate
          </h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Slow
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Moderate
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Fast
          </label>
        </div>

        {/* Soil, Moisture, Season Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">
            Soil, Moisture, Season
          </h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Loamy Soil
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Dry Moisture
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Summer Season
          </label>
        </div>

        {/* Tags Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Tags</h4>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Organic
          </label>
          <label className="block text-gray-600 text-sm mb-2">
            <input type="checkbox" className="mr-2" />
            Easy Care
          </label>
        </div>

        {/* Categories Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">
            Categories
          </h4>
          <select className="w-full bg-white border border-gray-300 text-gray-600 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="succulent">Succulent</option>
            <option value="flowering">Flowering</option>
          </select>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={toggleSidebar}
          className="block md:hidden mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          Close
        </button>
      </aside>

      {/* Main Content */}
      <div className="container min-w-[98%] md:min-w-[50%] xs:mx-2  mt-4 rounded-md bg-slate-100 ">
        <h2 className="text-3xl text-primary font-bold xs:m-4 xl:ml-16">
          All Products
        </h2>
        <div
          id="scrollRemove"
          className="grid grid-cols-2 justify-around xs:grid-cols-2 xs2:grid-cols-3 sm:grid-cols-3  lg:grid-cols-4 xl:ml-12 xl:mr-5 "
        >
          {data.allPlants && data.allPlants.length > 0 ? (
            data.allPlants.map((plant) => <Card key={plant.id} plant={plant} />)
          ) : (
            <p>No plants available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plants;
