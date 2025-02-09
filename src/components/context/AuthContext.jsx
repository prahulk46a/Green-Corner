import { createContext, useReducer } from "react";

// Initial state for the reducer
const initialState = {
  username: "",
  password: "",
  email: "",
  contact: "",
  userId: "",
  isAdmin: false,
};

// Reducer function to manage form state
const reducer = (state, action) => {
  switch (action.type) {
    case "update_field":
      return { ...state, [action.field]: action.value };
    case "update_admin":
      return { ...state, isAdmin: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// Create Context
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
