import { Edit, Trash2 } from "lucide-react";
import { useContext } from "react";
import { context } from "../../../context/PlantsContext";

const PlantTable = () => {
  let plants = useContext(context);
  console.log(plants);
  return (
    <div className="mt-4">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-bold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {plants.allPlants.map((plant) => (
                <tr key={plant.id} className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{plant.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{plant.category}</td>
                  <td className="px-4 py-3 text-sm">${plant.price}</td>
                  <td className="px-4 py-3 text-sm">
                    {plant.quantityAvailable}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-500 rounded-lg focus:outline-none focus:shadow-outline-gray">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-500 rounded-lg focus:outline-none focus:shadow-outline-gray">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlantTable;
