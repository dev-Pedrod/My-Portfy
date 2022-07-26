import { useContext, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// components 
import { Loading } from "./components/LoadingComponent";

// context
import { AuthContext, AuthProvider } from "./contexts/auth";

// pages
import { FeedPage } from "./pages/FeedPage";
import { ForgotPage } from "./pages/ForgotPage";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage";

export const MyRoutes = () => {
  // Sidebars
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);
    const pathname = window.location.pathname;

    if(loading) {
      return <Loading/>
    }
    
    if(!authenticated) {
      return <Navigate to="/signin" state={{pathname: pathname}}/>;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage toggle={toggle}  isOpen={isOpen}/>} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/reset-password/:token" element={<UpdatePasswordPage/>} />
          <Route path="/feed" element={<Private><FeedPage toggle={toggle}  isOpen={isOpen}/></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
