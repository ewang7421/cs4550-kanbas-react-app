import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "../Database";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const [showEditor, setShowEditor] = useState(false);
  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <p className="fs-2">Dashboard</p>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex mb-3">
            <h3 className="fw-medium">Published Courses ({courses.length})</h3>
            <button
              onClick={toggleEditor}
              className={`${"btn btn-warning ms-auto"} ${
                !showEditor ? "" : "d-none"
              }`}
            >
              Edit
            </button>

            <button
              onClick={toggleEditor}
              className={`${"btn btn-success ms-auto"} ${
                showEditor ? "" : "d-none"
              }`}
            >
              Done
            </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="container mx-0">
        <div className={showEditor ? "" : "d-none"}>
          <button className="btn btn-success" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>

          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {courses.map((course) => (
            <div className="col">
              <div className="card me-3 my-3">
                <img
                  src="https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="list-group-item"
                >
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text mb-0">{course.number}</p>
                    <p className="card-text">
                      {course.startDate} to {course.endDate}
                    </p>
                  </div>
                </Link>
                <button
                  className={`${"btn btn-warning card-edit"} ${
                    showEditor ? "" : "d-none"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className={`${"btn btn-danger card-delete"} ${
                    showEditor ? "" : "d-none"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
