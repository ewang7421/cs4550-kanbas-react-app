import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="container-fluid h-100 mx-0 px-0">
      <div className="row">
        <div className="col">
          <Nav />
        </div>
      </div>
      <div className="row h-100">
        <div className="d-flex container-fluid">
          <KanbasNavigation />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:courseId/*" element={<Courses />} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;
