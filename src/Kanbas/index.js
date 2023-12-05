import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import db from "./Database";
import { useState } from "react";
import store from "./store";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
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
                <Route
                  path="Dashboard"
                  element={
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                    />
                  }
                />
                <Route
                  path="Courses/:courseId/*"
                  element={<Courses courses={courses} />}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
