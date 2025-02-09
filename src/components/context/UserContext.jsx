import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  email: "",
  contact: "",
  userId: "",
  isAdmin: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "update_admin":
      return {
        ...state,
        isAdmin: action.value,
      };
    case "set_user_data":
      return {
        ...state,
        ...action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/users");
        dispatch({ type: "set_user_data", payload: response.data });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
