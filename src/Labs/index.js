import { Routes, Route, Link, Navigate } from "react-router-dom";
import Assignment3 from "./a3";

function Labs() {
  return (
    <div className="container">
      <h1>Labs</h1>
      <Link to="a3">Assignment 3</Link>
      <Routes>
        <Route path="/" element={<Navigate to="a3" />} />
        {/* <Route path="/" element={<Assignment3 />} /> */}
        <Route path="a3/*" element={<Assignment3 />} />
      </Routes>
      {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
    </div>
  );
}

export default Labs;
