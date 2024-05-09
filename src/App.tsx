import { Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Courses from "./pages/projects";
import AppWrapper from "./pages/appWrapper";


const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Courses />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
