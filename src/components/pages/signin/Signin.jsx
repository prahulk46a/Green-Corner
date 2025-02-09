import SigninBg from "../../../assets/SigninBg.jpg";
import Footer from "../../utils/Footer/Footer";
import Navbar from "../../utils/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3002/users")
      .then((response) => {
        console.log(response);
        const exists = response.data.some(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (exists) {
          navigate("/home");
        } else {
          toast.error("Invalid login. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-96">
      <ToastContainer />
      <div className="sm:max-h-full relative">
        <img className=" md:h-[90vh] " src={SigninBg} alt="Background" />

        <div className="md:absolute sm:relative md:top-40 md:right-60 md:min-h-[50vh] md:min-w-[20vw] p-6">
          {/* Apply shadow only to the form container */}
          <div className="bg-white p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full max-w-md transition-shadow hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>

              <div className="flex items-center justify-between my-4">
                <hr className="w-1/4 border-gray-300" />
                <span className="text-gray-500 text-sm">or</span>
                <hr className="w-1/4 border-gray-300" />
              </div>

              <button
                type="button"
                className="w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Sign In with Google
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
