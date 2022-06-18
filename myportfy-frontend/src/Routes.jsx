import { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// components 
import { Forgot } from "./components/Forgot";
import { Loading } from "./components/LoadingComponent";
import { ResetpPassword } from "./components/ResetPassword";

// context
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
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset-password/:token" element={<ResetpPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
