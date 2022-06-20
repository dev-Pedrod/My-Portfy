import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// api
import { api } from "../api/api";

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
    const user_id = response.headers.user_id;

    localStorage.setItem("logged_username", username);
    localStorage.setItem("user_token", token);
    localStorage.setItem("user_id", user_id);

    api.defaults.headers.Authorization = `${token}`;

    setUser(username);
    navigate("/")
  };

  const logout = () => {
    localStorage.removeItem("logged_username");
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_id");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};
