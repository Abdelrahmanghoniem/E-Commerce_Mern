// authContext.tsx
import { createContext } from "react";

// Define the interface (structure) for the context
interface AuthContextType {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, token: string) => void;
  logout: () => void;
}

// Create the AuthContext with a default value
export const AuthContext = createContext<AuthContextType>({
  username: null,
  token: null,
  login: () => {},
  isAuthenticated: false,
  logout: () => {},
});
