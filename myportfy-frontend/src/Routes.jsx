import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";

// pages
import { LoginPage } from "./pages/LoginPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Signin" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
};
