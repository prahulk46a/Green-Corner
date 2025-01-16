import { MdEmail } from "react-icons/md";
import SigninBg from "../../../assets/SigninBg.jpg";
import Footer from "../../utils/Footer/Footer";
import Navbar from "../../utils/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    //After fetching data from auth api stored in set and then checked whether data present in set or not
    axios
      .get("http://116.75.62.44:8000/auth")
      .then((response) => {
        console.log(response);
        const exists = response.data.some(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        // console.log(exists); // true if a matching user is found

        if (exists) {
          navigate("/home");
        } else {
          toast.error("Invalid login. Please try again.", {
            position: "top-right",
            autoClose: 3000, // Close after 3 seconds
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

    // Add your sign-in logic here
  };

  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <ToastContainer />
        <div>
          <img
            className="relative md:h-[90vh] sm:h-[40vh]   "
            src={SigninBg}
          ></img>

          <div className="absolute  md:top-40 md:right-60 sm:top-10 sm:right-10 md:min-h-[50vh] md:min-w-[20vw]   flex items-center justify-center sm:scroll ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Sign In
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4">
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

                {/* Password Input */}
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign In
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-between my-4">
                  <hr className="w-1/4 border-gray-300" />
                  <span className="text-gray-500 text-sm">or</span>
                  <hr className="w-1/4 border-gray-300" />
                </div>

                {/* Social Sign-In */}
                <div className="text-center">
                  <button
                    type="button"
                    className="w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                  >
                    Sign In with Google
                  </button>
                </div>
              </form>

              {/* Bottom Link */}
              <p className="text-center text-gray-600 mt-4 text-sm">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
