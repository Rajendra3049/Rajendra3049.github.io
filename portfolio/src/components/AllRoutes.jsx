import { Routes, Route } from "react-router-dom";
import About from "./about";
import Skills from "./skills";

export default function AllRoutes() {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      {" "}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<Skills />} />
      </Routes>
    </div>
  );
}
