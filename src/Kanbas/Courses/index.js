import db from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumb from "./Breadcrumb";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const breadcrumbItems = location.pathname
    .split("/")
    .filter((item, index) => index > 3);
  console.log(breadcrumbItems);
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="col">
      <div className="container-fluid">
        <div className="row mt-3">
          <Breadcrumb/>
          <hr />
        </div>
        <div className="row">
          <div className="col col-sm-2 d-none d-md-block fixed-width-195">
            <CourseNavigation />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
