import { Bell, Search, User } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b-4 border-green-500">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <input
            className="pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Search..."
          />
        </div>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <Bell className="w-6 h-6" />
        </button>
        <button className="h-8 w-8 rounded-full overflow-hidden focus:outline-none">
          <User className="w-full h-full text-gray-700" />
        </button>
      </div>
    </header>
  );
}
