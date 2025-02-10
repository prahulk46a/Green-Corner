import { Home, Users, Leaf, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-green-500">Plant Admin</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link
            to="/dashboard"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-200"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <Home className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/users"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-200"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <Users className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium">Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/plants"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-200"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <Leaf className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium">Plants</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-200"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <ShoppingCart className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium">Orders</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
