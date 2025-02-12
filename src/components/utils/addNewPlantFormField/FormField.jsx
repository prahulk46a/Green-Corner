import React, { memo } from "react";

const FormField = memo(
  ({ label, name, value = "", onChange, type = "text", options = [] }) => {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

        {type === "select" ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
