import { HiArrowLeft } from "react-icons/hi";
import Ratings from "../ratings/Ratings";
import { useLocation, useNavigate } from "react-router-dom";
import Reviews from "../reviews/Reviews";

const ProductDetails = () => {
  let navigate = useNavigate();

  let handleClick = () => {
    navigate("/home/plants");
  };
  let location = useLocation();
  console.log(location);
  let { plant } = location.state;

  return (
    <div className="flex xs:flex-col md:flex-row">
      {/* Product Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div
          className=" flex justify-center items-center mb-5 bg-black w-20 p-2 rounded-xl"
          onClick={handleClick}
        >
          {" "}
          <HiArrowLeft className="inline-block  text-white rounded-xl" />
          <button className="text-white"> Back</button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={plant.primaryImage}
              alt={plant.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-primary text-3xl font-bold mb-4">
              {plant.name}
            </h2>
            <Ratings rating={plant.rating}></Ratings>

            {/* size */}
            <div className="my-2">
              <p>Select size: </p>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Small
              </button>
              <button className="text-black py-2 px-4 rounded-lg shadow-lg">
                Medium
              </button>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                large
              </button>
            </div>

            <h1 className="text-2xl font-semibold text-green-600 mb-4">
              ${plant.price}
            </h1>

            <p className="text-lg text-gray-700 mb-4">{plant.description}</p>

            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Light: Bright, indirect sunlight</li>
              <li>Water: Weekly, allow soil to dry between watering</li>
              <li>Size: 10-12 inches tall</li>
            </ul>

            <button className="bg-green-500 hover:bg-green-600 m-5 text-white py-2 px-4 rounded-lg shadow-lg">
              Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* Care Instructions component */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Care Instructions</h3>
          <p className="text-gray-600">
            Monstera thrives in bright, indirect sunlight. Water weekly,
            ensuring the topsoil is dry before watering again. Keep in a
            temperature range of 65°F to 85°F.
          </p>
        </section>

        {/* Related Products corousels
        <RelatedProducts /> */}

        <br></br>
        <br></br>
        <br></br>

        {/* Reviews related to plant   */}
        <h1>Reviews</h1>
        <Reviews reviews={plant.reviews} />
      </main>
    </div>
  );
};

export default ProductDetails;
