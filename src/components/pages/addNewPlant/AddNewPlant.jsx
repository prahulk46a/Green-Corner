import axios from "axios";
import { useState } from "react";

const AddNewPlant = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    reviews: [],
    sunlightRequirement: "",
    moistureRequirement: "",
    soilType: "",
    season: "",
    growthRate: "",
    potSizeRequired: "",
    genus: "",
    localName: "",
    regionalName: "",
    biologicalName: "",
    botanicalName: "",
    tags: [],
    shippingStates: [],
    availability: "In Stock",
    quantityAvailable: "",
    sellerName: "",
    sellerAddress: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    primaryImage: "",
    secondaryImages: [],
    shoppingPolicy: "",
    refundPolicy: "",
  });

  //posting this formdata onsubmit to json file

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("tags") || name.includes("shippingStates")) {
      const values = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: values,
      }));
    } else if (name.includes("sellerAddress")) {
      const field = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        sellerAddress: {
          ...prevData.sellerAddress,
          [field]: value,
        },
      }));
    } else if (name === "reviews") {
      setFormData((prevData) => ({
        ...prevData,
        reviews: value.split(",").map((review) => ({ comment: review })),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    axios.post("http://localhost:3001/plants", formData).then(() => {
      console.log("posted Sucessfuly Data");
    });
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6">Add New Plant</h1>

      {/* Basic Details */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Description and Rating */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Sunlight, Moisture, Soil, Season, Growth Rate */}
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label
            htmlFor="sunlightRequirement"
            className="block text-sm font-medium text-gray-700"
          >
            Sunlight Requirement
          </label>
          <input
            type="text"
            id="sunlightRequirement"
            name="sunlightRequirement"
            value={formData.sunlightRequirement}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="moistureRequirement"
            className="block text-sm font-medium text-gray-700"
          >
            Moisture Requirement
          </label>
          <input
            type="text"
            id="moistureRequirement"
            name="moistureRequirement"
            value={formData.moistureRequirement}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="soilType"
            className="block text-sm font-medium text-gray-700"
          >
            Soil Type
          </label>
          <input
            type="text"
            id="soilType"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Season, Growth Rate, Pot Size */}
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label
            htmlFor="season"
            className="block text-sm font-medium text-gray-700"
          >
            Season
          </label>
          <input
            type="text"
            id="season"
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="growthRate"
            className="block text-sm font-medium text-gray-700"
          >
            Growth Rate
          </label>
          <input
            type="text"
            id="growthRate"
            name="growthRate"
            value={formData.growthRate}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="potSizeRequired"
            className="block text-sm font-medium text-gray-700"
          >
            Pot Size Required
          </label>
          <input
            type="text"
            id="potSizeRequired"
            name="potSizeRequired"
            value={formData.potSizeRequired}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Seller Details */}
      <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label
            htmlFor="sellerName"
            className="block text-sm font-medium text-gray-700"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="quantityAvailable"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity Available
          </label>
          <input
            type="number"
            id="quantityAvailable"
            name="quantityAvailable"
            value={formData.quantityAvailable}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Shipping States */}
      <div className="mb-4">
        <label
          htmlFor="shippingStates"
          className="block text-sm font-medium text-gray-700"
        >
          Shipping States
        </label>
        <select
          id="shippingStates"
          name="shippingStates"
          multiple
          value={formData.shippingStates}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Maharashtra">Maharashtra</option>
          <option value="Goa">Goa</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
        </select>
      </div>

      {/* Seller Address */}
      <h3 className="text-lg font-medium mb-4">Seller Address</h3>
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label
            htmlFor="sellerAddress.street"
            className="block text-sm font-medium text-gray-700"
          >
            Street
          </label>
          <input
            type="text"
            id="sellerAddress.street"
            name="sellerAddress.street"
            value={formData.sellerAddress.street}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="sellerAddress.city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="sellerAddress.city"
            name="sellerAddress.city"
            value={formData.sellerAddress.city}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="sellerAddress.state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="sellerAddress.state"
            name="sellerAddress.state"
            value={formData.sellerAddress.state}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label
            htmlFor="sellerAddress.country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="sellerAddress.country"
            name="sellerAddress.country"
            value={formData.sellerAddress.country}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="sellerAddress.pincode"
            className="block text-sm font-medium text-gray-700"
          >
            Pincode
          </label>
          <input
            type="text"
            id="sellerAddress.pincode"
            name="sellerAddress.pincode"
            value={formData.sellerAddress.pincode}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label
          htmlFor="primaryImage"
          className="block text-sm font-medium text-gray-700"
        >
          Primary Image URL
        </label>
        <input
          type="text"
          id="primaryImage"
          name="primaryImage"
          value={formData.primaryImage}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Secondary Images */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Secondary Images URLs (Comma separated)
        </label>
        <input
          type="text"
          name="secondaryImages"
          value={formData.secondaryImages.join(", ")}
          onChange={(e) => {
            const newImages = e.target.value
              .split(",")
              .map((item) => item.trim());
            setFormData({ ...formData, secondaryImages: newImages });
          }}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Policies */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label
            htmlFor="shoppingPolicy"
            className="block text-sm font-medium text-gray-700"
          >
            Shopping Policy
          </label>
          <textarea
            id="shoppingPolicy"
            name="shoppingPolicy"
            value={formData.shoppingPolicy}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="refundPolicy"
            className="block text-sm font-medium text-gray-700"
          >
            Refund Policy
          </label>
          <textarea
            id="refundPolicy"
            name="refundPolicy"
            value={formData.refundPolicy}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNewPlant;
