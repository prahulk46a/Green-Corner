import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/plants", label: "Products" },
    { path: "/bulk-gifting", label: "Bulk Gifting" },
    { path: "/plant-care", label: "Plant Care" },
  ];

  const iconLinks = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      label: "Search",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      label: "Wishlist",
      path: "/wishlist",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      label: "Cart",
      path: "/cart",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      label: "SignIn",
      path: "/signin",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-2 mb-2 relative">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="w-16" alt="Company Logo">
              <img src={logo}></img>
            </span>
            <span className="self-center text-2xl font-semibold text-gray-800">
              Green Corner
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Navigation Links */}
            <ul className="font-medium flex space-x-8 mr-20">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end
                    className={({ isActive }) => {
                      // Ensure exact matching for the root path
                      const isExactActive =
                        path === "/"
                          ? isActive && location.pathname === "/"
                          : isActive;
                      return isExactActive ? "yesActive" : "notActive";
                    }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Icons */}

            <ul className="flex space-x-6">
              {" "}
              {/*space-x usd to space between 2 li*/}
              {iconLinks.map(({ icon, label, path }, index) => (
                <li key={index} className="group relative">
                  <Link
                    to={path}
                    className="p-2 text-gray-600 hover:text-blue-600"
                  >
                    {icon}
                    <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm px-2 py-1 rounded-md -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      {label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50`}
        >
          <div className="px-4 py-3 space-y-4">
            {/* Mobile Navigation Links */}
            <ul className="space-y-3">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block text-gray-900 hover:text-blue-600 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Icons with Labels */}
            <div className="border-t border-gray-200 pt-3">
              <ul className="grid grid-cols-4 gap-4">
                {iconLinks.map(({ icon, label, path }, index) => (
                  <li key={index} className="flex flex-col items-center">
                    <Link
                      to={path}
                      className="p-2 text-gray-600 hover:text-blue-600 flex flex-col items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {icon}
                      <span className="text-xs mt-1">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
