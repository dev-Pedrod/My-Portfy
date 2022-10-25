import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// api
import {api} from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = JSON.parse(localStorage.getItem("my-portfy:_current"));

    if (recoveredUser) {
      setUser(recoveredUser);
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    let pathname = "/feed";
    if(localStorage.getItem("redirect_pathname") !== null){
      pathname = localStorage.getItem("redirect_pathname");
    }

    const response = await api.post("/login", {username, password})

    const token = response.headers.authorization;
    const user_id = response.headers.user_id;

    localStorage.setItem("my-portfy:_section", token);
    localStorage.setItem("my-portfy:_id", user_id);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const recoveredUser = await recoverUser();

    setUser(recoveredUser);
    navigate(pathname)
    localStorage.removeItem("redirect_pathname");
  };

  const recoverUser = async () => {
    if (localStorage.getItem("my-portfy:_id")) {
      const response = await api.get(`/users/${localStorage.getItem("my-portfy:_id")}`);
      localStorage.setItem("my-portfy:_current", JSON.stringify(response.data));
      localStorage.removeItem("my-portfy:_id")
      return response.data;
    }
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
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout, recoverUser}}>
      {children}
    </AuthContext.Provider>
  );
};
