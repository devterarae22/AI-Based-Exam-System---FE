import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signup from "./Components/Singup";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Class from "./Components/CompleteClass/Classes";
import ChooseSubject from "./Components/CompleteClass/ChooseSubject";
import Format from "./Components/CompleteClass/Format";
import Chapters from "./Components/CompleteClass/Chapters";
import TestScreen from "./Components/TestScreen";
import ResultScreen from "./Components/ResultScreen";

function App() {
  return (
    
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Classes" element={<Class />} />
          <Route path="/ChooseSubject" element={<ChooseSubject />} />
          <Route path="/Format" element={<Format />} />
          <Route path="/Chapters" element={<Chapters />} />
          <Route path="/TestScreen" element={<TestScreen />} />
          <Route path="/ResultScreen" element={<ResultScreen/>}/>




          
          </Routes>
      </Router>
          
  
  );
}

export default App;
