import { Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Courses from "./pages/projects";
import MyWork from "./pages/myWork";
import AppWrapper from "./pages/appWrapper";
import NestedComments from "./pages/nestedComments";

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Courses />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/nestedcomments" element={<NestedComments />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
