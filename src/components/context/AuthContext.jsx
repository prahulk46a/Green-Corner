import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

// Initial state for the reducer
const initialState = {
  users: [], // Array to hold fetched user data
  loading: false, // Loading indicator
  error: null, // Error message, if any
};

// Reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true, error: null };
    case "fetch_success":
      return { ...state, users: action.payload, loading: false };
    case "fetch_failure":
      return { ...state, error: action.payload, loading: false };
    // Additional actions (like update_field, update_admin, or reset) can be added here if needed.
    default:
      return state;
  }
};

// Create Context
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data using axios.get on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "fetch_start" });
      try {
        const response = await axios.get("http://localhost:3002/users"); // Replace with your API endpoint
        // Assuming response.data is the array of users
        dispatch({ type: "fetch_success", payload: response.data });
      } catch (error) {
        dispatch({ type: "fetch_failure", payload: error.message });
      }
    };

    fetchUsers();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
