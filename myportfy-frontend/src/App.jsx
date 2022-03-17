import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import home from "./assets/images/resume_II.svg";
import { GridTwoColumn } from "./components/GridTwoColumn";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <GridTwoColumn background={false} title="Unlimited Transactions with zero fees" uppercase={false} text="Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fees." srcImg={home} imgStart={true} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
