import KanbasNavigation from "./KanbasNavigation/KanbasNavigation";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import store from "./store";
import axios from "axios";
import Signin from "./Users/signin";
import Account from "./Users/account";

function Kanbas() {
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const URL =
    "https://kanbas-node-server-app-ewang-3f6d180f75ea.herokuapp.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({
      name: "",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course.$oid}`);
    setCourses(courses.filter((c) => c._id !== course));
  };

  const updateCourse = async (course) => {
    if (course._id) {
      const response = await axios.put(`${URL}/${course._id.$oid}`, course);
    }

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({
      name: "",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    });
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
                <Route path="Grades" element={<h1>Grades</h1>} />{" "}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
