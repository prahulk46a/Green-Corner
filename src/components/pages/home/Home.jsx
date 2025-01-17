import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";
import { useContext } from "react";
import { context } from "../../context/PlantsContext";
import Card from "../../utils/card/Card";

const Home = () => {
  let allPlants = useContext(context);
  console.log(allPlants);
  return (
    <div>
      <Navbar />

      <div className="min-h-[70vh]  justify-around flex flex-row flex-wrap">
        {allPlants.allPlants && allPlants.allPlants.length > 0 ? (
          allPlants.allPlants.map((plant) => (
            <Card key={plant.id} plant={plant} />
          ))
        ) : (
          <p>No plants available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
