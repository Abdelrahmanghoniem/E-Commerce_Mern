// useAuth.tsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import the context

// Create the hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
