import { RouterProvider } from "react-router-dom";
import PlantsContext from "./components/context/PlantsContext";
import { routes } from "./components/routes/Routers";

const App = () => {
  return (
    //using this my plantContext data will be available for entire application
    <PlantsContext>
      <RouterProvider router={routes} />
    </PlantsContext>
  );
};

export default App;
