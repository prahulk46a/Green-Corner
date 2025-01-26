import { useContext, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Ratings from "../ratings/Ratings";
import { useLocation, useNavigate } from "react-router-dom";
import Reviews from "../reviews/Reviews";
import { CartContextState } from "../../context/CartContext";

const ProductDetails = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { addToCart } = useContext(CartContextState);
  const { plant } = location.state;

  //To add visual effect after adding to cart
  const [added, setAdded] = useState(false);

  const [selectedImage, setSelectedImage] = useState(plant.primaryImage);
  const [selectedIndex, setSelectedIndex] = useState(null);

  let handleClick = () => {
    navigate("/home/plants");
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleCart = () => {
    addToCart(plant);
    setAdded(true); // Trigger the effect
    setTimeout(() => setAdded(false), 1000); // Reset the effect after 1 second
  };

  return (
    <div className="flex xs:flex-col md:flex-row">
      {/* Product Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div
          className="flex justify-center items-center mb-5 bg-black w-20 p-2 rounded-xl"
          onClick={handleClick}
        >
          <HiArrowLeft className="inline-block text-white rounded-xl" />
          <button className="text-white">Back</button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1">
            {/* Main Image */}
            <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
              <img
                src={selectedImage}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary Images Section */}
            <div className="mt-4">
              <div className="flex gap-4">
                {/* Show Primary Image alongside Secondary Images */}
                <div
                  onClick={() => handleImageClick(plant.primaryImage, null)} // Update to primary image if clicked
                  className={`cursor-pointer ${
                    selectedIndex === null
                      ? "border-4  border-blue-500 rounded-lg"
                      : ""
                  }`}
                >
                  <img
                    src={plant.primaryImage}
                    alt="Primary Image"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>

                {/* Show all secondary images */}
                {plant.secondaryImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image, index)} // Update main image when clicked
                    className={`cursor-pointer ${
                      selectedIndex === index
                        ? "border-4 border-blue-500 rounded-lg"
                        : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Secondary Image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-primary text-3xl font-bold mb-4">
              {plant.name}
            </h2>
            <Ratings rating={plant.rating}></Ratings>

            {/* Size Selection */}
            <div className="my-2">
              <p>Select size: </p>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Small
              </button>
              <button className="text-black py-2 px-4 rounded-lg shadow-lg">
                Medium
              </button>
              <button className="m-5 text-black py-2 px-4 rounded-lg shadow-lg">
                Large
              </button>
            </div>

            <h1 className="text-2xl font-semibold text-green-600 mb-4">
              ₹ {plant.price}
            </h1>

            <p className="text-lg text-gray-700 mb-4">{plant.description}</p>

            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Light: Bright, indirect sunlight</li>
              <li>Water: Weekly, allow soil to dry between watering</li>
              <li>Size: 10-12 inches tall</li>
            </ul>

            <button
              className={`bg-green-500 hover:bg-green-600 m-5 text-white py-2 px-4 rounded-lg shadow-lg  transition ${
                added ? "animate-button-lift" : ""
              }`}
              onClick={handleCart}
            >
              Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">
              Buy Now
            </button>
          </div>
        </div>

        {/* Care Instructions */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Care Instructions</h3>
          <p className="text-gray-600">
            Monstera thrives in bright, indirect sunlight. Water weekly,
            ensuring the topsoil is dry before watering again. Keep in a
            temperature range of 65°F to 85°F.
          </p>
        </section>

        <br />
        <br />
        <br />

        {/* Reviews */}
        <h1 className="font-semibold text-2xl mb-4">Reviews:</h1>
        <Reviews reviews={plant.reviews} />
      </main>
    </div>
  );
};

export default ProductDetails;
