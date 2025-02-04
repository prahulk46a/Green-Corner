import { RouterProvider } from "react-router-dom";
import PlantsContext from "./components/context/PlantsContext";
import { routes } from "./components/routes/Routers";
import CartContext from "./components/context/CartContext";
import WishlistContext from "./components/context/WishlistContext";

const App = () => {
  return (
    //using this my plantContext data will be available for entire application
    <WishlistContext>
      <PlantsContext>
        <CartContext>
          <RouterProvider router={routes} />
        </CartContext>
      </PlantsContext>
    </WishlistContext>
  );
};

export default App;
