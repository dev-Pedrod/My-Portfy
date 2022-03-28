import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import { LoginPage } from "./pages/LoginPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Signin" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
