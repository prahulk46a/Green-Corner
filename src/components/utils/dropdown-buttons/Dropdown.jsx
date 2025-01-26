import PropTypes from "prop-types";

const Dropdown = ({ label, options }) => {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5 fill-gray-500 inline ml-2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
          />
        </svg>
      </button>
      <ul className="group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-50">
        {options.map((option) => (
          <li
            key={option}
            className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
