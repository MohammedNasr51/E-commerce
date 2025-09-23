// import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const Home = lazy(() => import("../pages/Home"));
// const About = lazy(() => import("../pages/About"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
