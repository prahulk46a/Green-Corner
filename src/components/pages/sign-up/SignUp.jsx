import { useContext } from "react";
import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";

import SigninBg from "../../../assets/SigninBg.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleAdmin = (e) => {
    dispatch({
      type: "update_admin",
      value: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", state);

    axios.post("http://localhost:3002/users", {
      ...state,
      userId: Date.now(),
    });

    dispatch({ type: "reset" });
  };

  return (
    <div>
      <Navbar />
      <img
        className="relative md:h-[90vh] sm:h-[40vh]"
        src={SigninBg}
        alt="Background"
      />
      <div className="md:absolute sm:relative md:top-40 md:right-60 sm:top-10 sm:right-10 md:min-h-[50vh] md:min-w-[20vw] min-h-full flex items-center justify-center sm:scroll">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={state.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-gray-700 font-semibold mb-2"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={state.contact}
                onChange={handleChange}
                required
                placeholder="Enter your contact"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-row items-center mb-4 gap-4">
              <label
                htmlFor="isAdmin"
                className="block text-gray-700 font-semibold mb-2"
              >
                Login as Admin
              </label>
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={state.isAdmin}
                onChange={handleAdmin}
                className="px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-500 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
