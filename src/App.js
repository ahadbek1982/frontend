
import "./App.css";
import Users from "./components/Users";
import Headers from "./components/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Typetask from "./components/Typetask";
import Dashbord from "./components/Dashbord";
import Task from "./components/EditTypeTask";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <BrowserRouter>
      <Headers>
        <Routes>
          <Route path="/login" element={<Users />}></Route>
          <Route path="/typetask" element={<Typetask />}></Route>
          <Route path="/typetask/:id" element={<Typetask />}></Route>
          <Route path="/dash" element={<Dashbord />}></Route>
        </Routes>
      </Headers>
    </BrowserRouter>
  );
}

export default App;
