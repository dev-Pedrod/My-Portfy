import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("logged_username");

    if (recoveredUser) {
      setUser(recoveredUser);
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await api.post("/login", {username, password})
    
    const token = response.headers.authorization;

    localStorage.setItem("logged_username", username);
    localStorage.setItem("user_token", token);

    api.defaults.headers.Authorization = `${token}`;

    setUser(username);
    navigate("/")
  };

  const logout = () => {
    localStorage.removeItem("logged_username");
    localStorage.removeItem("user_token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};
