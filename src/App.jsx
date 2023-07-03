import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import About from "./componets/About";
import Name from "./componets/name/Name";
import Contacts from "./componets/Contacts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            Component={() => (
              <>
                <Home></Home>
                <Name></Name>
              </>
            )}
          ></Route>
          <Route path="/About" Component={() => <About></About>}></Route>
          <Route
            path="/Contacts"
            Component={() => <Contacts></Contacts>}
          ></Route>
          <Route path="/Name" Component={() => <Name></Name>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
