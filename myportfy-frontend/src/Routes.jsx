import { useContext, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// components 
import { Loading } from "./components/LoadingComponent";
import { ResetpPassword } from "./components/ResetPassword";

// context
import { AuthContext, AuthProvider } from "./contexts/auth";

// pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ForgotPage } from "./pages/ForgotPage";

export const MyRoutes = () => {
  // Sidebars
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
          <Route path="/" element={<Private> <HomePage toggle={toggle}  isOpen={isOpen}/> </Private>} />
          <Route path="/Signin" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/reset-password/:token" element={<ResetpPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
