import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import Headers from "./components/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Typetask from "./components/Typetask";
import Dashbord from "./components/Dashbord";
import Task from "./components/Task";

function App() {
  return (
    <BrowserRouter>
      <Headers>
        <Routes>
          <Route path="/login" element={<Users />}></Route>
          <Route path="/typetask" element={<Typetask />}></Route>
          <Route path="/tasks/:id" element={<Task />}></Route>
          <Route path="/dash" element={<Dashbord />}></Route>
        </Routes>
      </Headers>
    </BrowserRouter>
  );
}

export default App;
