import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Login2 from './Components/Pages/Login2';
import Home from './Components/Layout/Home';
import Freetrial from './Components/Pages/Freetrial';
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/freetrial" element={<Freetrial />} />
      
      </Routes>
      </div>
      </Router>
  );
}

export default App;

//<Route path="/login" element={<Login />} />
//<Route path="/freetrial" element={<Freetrial />} />
