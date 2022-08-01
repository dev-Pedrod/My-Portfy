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
    const recoveredUser = JSON.parse(localStorage.getItem("my-portfy:_current"));

    if (recoveredUser) {
      setUser(recoveredUser);
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    let pathname = "/";
    if(localStorage.getItem("redirect_pathname") !== null){
      pathname = localStorage.getItem("redirect_pathname");
    }
    
    const response = await api.post("/login", {username, password})
    
    const token = response.headers.authorization;
    const user_id = response.headers.user_id;

    localStorage.setItem("my-portfy:_username", username);
    localStorage.setItem("my-portfy:_section", token);
    localStorage.setItem("my-portfy:_id", user_id);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(username);
    navigate(pathname)
    localStorage.removeItem("redirect_pathname");
  };

  const logout = () => {
    localStorage.removeItem("my-portfy:_username");
    localStorage.removeItem("my-portfy:_section");
    localStorage.removeItem("my-portfy:_id");
    localStorage.removeItem("my-portfy:_current");

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
