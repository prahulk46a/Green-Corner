import { useContext, useState } from "react";
import SigninBg from "../../../assets/SigninBg.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Check, X } from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS file for the toast styles

const SignUp = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password) => {
    const validation = {
      length: password.length >= 6,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    setPasswordValidation(validation);
    return validation;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      validatePassword(value);
    }

    dispatch({
      type: "update_field",
      field: name,
      value: value,
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
    const isValid = Object.values(passwordValidation).every(Boolean);

    if (!isValid) return;
    axios
      .post("http://localhost:3002/users", {
        ...state,
        userId: Date.now(),
      })
      .then(() => {
        // Show success toast
        toast.success("Successfully registered!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });

    dispatch({ type: "reset" });
    setIsFocused(false);
    setPasswordValidation({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      specialChar: false,
    });
    navigate("/signin");
  };

  const requirements = [
    { key: "length", label: "At least 6 characters" },
    { key: "uppercase", label: "One uppercase letter" },
    { key: "lowercase", label: "One lowercase letter" },
    { key: "number", label: "One number" },
    { key: "specialChar", label: "One special character" },
  ];

  const navigate = useNavigate();
  return (
    <div>
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
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    if (!state.password) {
                      setIsFocused(false);
                    }
                  }}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Password Requirements - Responsive Positioning */}
                {(isFocused || state.password) && (
                  <div
                    className="
                    md:absolute md:left-[105%] md:top-0 md:w-64
                    sm:relative sm:mt-3 sm:w-full
                    p-3 bg-white rounded-lg border border-gray-200 shadow-sm
                  "
                  >
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Password must contain:
                    </p>
                    <div className="space-y-2">
                      {requirements.map(({ key, label }) => (
                        <div key={key} className="flex items-center gap-2">
                          {passwordValidation[key] ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <X className="w-4 h-4 text-red-500" />
                          )}
                          <span
                            className={`text-sm ${
                              passwordValidation[key]
                                ? "text-green-600"
                                : "text-gray-600"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!Object.values(passwordValidation).every(Boolean)}
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

      <ToastContainer />
    </div>
  );
};

export default SignUp;
