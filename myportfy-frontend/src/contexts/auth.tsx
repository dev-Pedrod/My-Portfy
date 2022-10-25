import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// api
import {getUserById} from "../service/user.service";
import {authenticate} from "../service/auth.service";

// types
import {User} from "../types/user";

export interface AuthContextTiping {
  setUser?: React.Dispatch<React.SetStateAction<User | null>>;
  user?: User;
  authenticated: boolean;
  loading: boolean;
  login: Function;
  logout: Function;
}

export const AuthContext = createContext<AuthContextTiping>({
  setUser: null,
  authenticated: false,
  loading: false,
  login: null,
  logout: null,
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = JSON.parse(localStorage.getItem("my-portfy:_current"));
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string, onError: Function) => {
    let pathname = "/feed";
    if(localStorage.getItem("redirect_pathname") !== null){
      pathname = localStorage.getItem("redirect_pathname");
    }
    const response = await authenticate({onError, username, password})
    const data = response.headers.user_id;
    localStorage.setItem("my-portfy:_section", response.headers.authorization);

    await getUserById({data}).then((response) => {
      setUser(response.data);
      localStorage.setItem("my-portfy:_current", JSON.stringify(response.data));
    });

    navigate(pathname)
    localStorage.removeItem("redirect_pathname");
  };

  const logout = () => {
    localStorage.removeItem("my-portfy:_username");
    localStorage.removeItem("my-portfy:_section");
    localStorage.removeItem("my-portfy:_id");
    localStorage.removeItem("my-portfy:_current");

    setUser(null);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
