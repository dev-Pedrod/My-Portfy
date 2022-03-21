import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import home from "./assets/images/portfolio.svg";
import { GridTwoColumn } from "./components/GridTwoColumn";
import { Login } from "./components/LoginComponent";
import { Signup } from "./components/SignupComponent";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GridTwoColumn
                background={true} 
                srcImg={home}
                alt="Teste"
                imgStart={true}
                displayNone={true}
                component={<Signup/>}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
