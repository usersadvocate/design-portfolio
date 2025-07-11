import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";
import ScrollToTop from "../utils/ScrollToTop";

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </Router>
  );
}
