import { RouterProvider } from "react-router-dom";
import PlantsContext from "./components/context/PlantsContext";
import { routes } from "./components/routes/Routers";
import Navbar from "./components/utils/navbar/Navbar";

const App = () => {
  return (
    //using this my plantContext data will be available for entire application
    <PlantsContext>
      {/* <Navbar /> */}
      <RouterProvider router={routes} />
    </PlantsContext>
  );
};

export default App;
