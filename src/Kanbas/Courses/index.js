import db from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { useLocation } from "react-router-dom";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  console.log("Current Location:", location.pathname);
  const course = db.courses.find((course) => course._id === courseId);
  const breadcrumbItems = () => {
    let result = [course.name]
    return result;
  }
  return (
    <div class="col">
      <div class="container-fluid">
        <div class="row mt-3">
          <div class="col d-flex">
            <AiOutlineMenu className="mt-1 me-2 fs-4" />
            <nav aria-label="breadcrumb" className="kanbas-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item kanbas-red">{course.name}</li>
                {breadcrumbItems}
              </ol>
            </nav>
          </div>
          <hr />
        </div>
        <div class="row">
          <div class="col col-sm-2 d-none d-md-block">
            <CourseNavigation />
          </div>
          <div class="col"
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h1>Home</h1>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<h1>Assignments</h1>} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
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
