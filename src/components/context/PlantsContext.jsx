import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const context = createContext();

const PlantsContext = ({ children }) => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://116.75.62.44:8000/plants")
      .then((response) => {
        setAllPlants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);
  console.log(allPlants); //Will show first empty array and then api as component get reloaded when api fetch ans change in state occurs
  return <context.Provider value={{ allPlants }}>{children}</context.Provider>; //provided state to context
};

export default PlantsContext;
