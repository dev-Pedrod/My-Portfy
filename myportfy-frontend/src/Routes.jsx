import { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "./components/LoadingComponent";

import { AuthContext, AuthProvider } from "./contexts/auth";

// pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";


export const MyRoutes = () => {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);
    if(loading) {
      return <Loading/>
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
          <Route path="/" element={<Private> <HomePage /> </Private>} />
          <Route path="/Signin" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
