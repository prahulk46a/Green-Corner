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
        } fixed md:relative top-0 left-0  md:min-w-[20%] max-h-screen p-6 bg-gray-100 rounded-md shadow-md m-4 border border-gray-200 z-20 md:block`}
      >
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Sunlight</h4>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Low
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Moderate
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> High
          </label>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Water Requirements</h4>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Weekly
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Bi-weekly
          </label>
        </div>
        {/* Close button for mobile */}
        <button
          onClick={toggleSidebar}
          className="block md:hidden mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </aside>

      {/* Main Content */}
      <div className="container min-w-[98%] md:min-w-[50%] md:mx-auto mt-4 rounded-md bg-slate-100 ">
        <h2 className="text-2xl text-primary font-bold m-4">All Products</h2>
        <div
          id="scrollRemove"
          className="grid grid-cols-2 justify-around xs:grid-cols-2 xs2:grid-cols-3 sm:grid-cols-3  lg:grid-cols-4  "
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
