import React from "react";
import useAuth from "../hooks/useAuth";

const AuthButton = () => {
  const { authenticated, login, logout } = useAuth();
  const onClick = () => {
    if (authenticated) return logout();
    login();
  };

  return <button onClick={onClick}>
    {authenticated ? "Вийти" : "Зайти"}
  </button>
}

export default AuthButton