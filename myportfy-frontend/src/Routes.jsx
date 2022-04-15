import { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { AuthContext, AuthProvider } from "./contexts/auth";

// pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

export const MyRoutes = () => {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);
    if(loading) {
      return <div className="loading">Carregando...</div>
    }

    if(!authenticated) {
      return <Navigate to="/signin"/>;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signin" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
