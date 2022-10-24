import {useContext} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

// components
import {Loading} from "./components/Loading";

// context
import {AuthContext, AuthProvider} from "./contexts/auth";

// pages
import {FeedPage} from "./pages/FeedPage";
import {ForgotPage} from "./pages/ForgotPage";
import {HomePage} from "./pages/Home";
import {LoginPage} from "./pages/LoginPage";
import {SignupPage} from "./pages/SignupPage";
import {UpdatePasswordPage} from "./pages/UpdatePasswordPage";
import {GenericTemplate} from "./portfolio/templates/generic";

export const MyRoutes = () => {
  // contexts
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);
    const pathname = window.location.pathname;

    if (loading) {
      return <Loading/>
    }

    if (!authenticated) {
      localStorage.setItem("redirect_pathname", pathname);
      return <Navigate to="/signin"/>;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/forgot" element={<ForgotPage/>}/>
          <Route path="/reset-password/:token" element={<UpdatePasswordPage/>}/>

          {/* Private routes */}
          <Route path="/feed" element={<Private><FeedPage/></Private>}/>

          {/* Test routes*/}
          <Route path="/test/" element={<GenericTemplate/>}/>
          <Route path="/test/:id" element={<GenericTemplate/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
