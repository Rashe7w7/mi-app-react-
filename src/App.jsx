import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AppLab2 from "./pages/AppLab2";
import AppLab3 from "./pages/AppLab3";
import AppLab4 from "./pages/AppLab4";
import AppLab5 from "./pages/AppLab5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Applab2" element={<AppLab2 />} />
      <Route path="/Applab3" element={<AppLab3 />} />
      <Route path="/Applab4" element={<AppLab4 />} />
      <Route path="/Applab5/*" element={<AppLab5 />} />
    </Routes>
  );
}

export default App;