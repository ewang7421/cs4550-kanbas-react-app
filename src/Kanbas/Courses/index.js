import db from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./index.css";
import CourseNavigation from "./CourseNavigation";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div class="col">
      <div class="container-fluid">
        <div class="row mt-3">
          <div class="col d-flex">
            <AiOutlineMenu className="mt-1 me-2 fs-4" />
            <nav aria-label="breadcrumb" className="kanbas-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item kanbas-red">{course.name}</li>
              </ol>
            </nav>
          </div>
          <hr />
        </div>
        <div class="row">
          <div class="col col-sm-2 d-none d-md-block">
            <CourseNavigation />
          </div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "100px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h1>Home</h1>} />
              <Route path="Modules" element={<h1>Modules</h1>} />
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
