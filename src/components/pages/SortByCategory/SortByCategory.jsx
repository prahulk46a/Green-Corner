const SortByCategory = () => {
  return (
    <div className="bg-slate-100 shadow-lg rounded-lg p-6 w-[90%] mx-auto my-8">
      <h2 className="text-3xl font-bold text-[#21543D] text-center mb-6">
        Shop By Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Sun Intensity", options: ["High", "Moderate", "Low"] },
          { label: "Moisture Req", options: ["High", "Moderate", "Low"] },
          { label: "Soil Type", options: ["Clay", "Loamy", "Sandy"] },
          { label: "Season", options: ["Summer", "Winter", "All Seasons"] },
          { label: "Growth Rate", options: ["Fast", "Moderate", "Slow"] },
        ].map((filter, index) => (
          <select
            key={index}
            className="bg-[#F5F5F5] text-[#333333] border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#21543D]"
          >
            <option>{filter.label}</option>
            {filter.options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default SortByCategory;
