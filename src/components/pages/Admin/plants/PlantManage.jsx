import Header from "../AdminDashboardRequired/Header";
import Sidebar from "../AdminDashboardRequired/SideBar";
import PlantTable from "./PlantTable";

const PlantManage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Plant Inventory" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">
              Plant Inventory
            </h3>
            <PlantTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlantManage;
