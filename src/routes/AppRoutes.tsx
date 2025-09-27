import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import ("../pages/Home/Home"));

// const Home = lazy(() => import("../pages/Home"));
// const About = lazy(() => import("../pages/About"));

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
  );
}
