import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import home from "./assets/images/resume_II.svg";
import { GridTwoColumn } from "./components/GridTwoColumn";
import { Login } from "./components/LoginComponent";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GridTwoColumn
                background={false} 
                srcImg={home}
                alt="Teste"
                imgStart={true}
                component={<Login/>}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
