import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumb from "./Breadcrumb";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});

  const { courseId } = useParams();
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);

    console.log(course);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="col">
      <div className="container-fluid">
        <div className="row mt-3">
          <Breadcrumb course={course} />
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
                element={<AssignmentEditor />}
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
