import {useState} from "react";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage("isAuthenticated", false);
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  const logout = () => {
    setIsAuthenticated(false);
    setAuthenticated(false);
  };
  const login = () => {
    setIsAuthenticated(true);
    setAuthenticated(true);
  }

  return { authenticated, logout, login };
}

export default useAuth;