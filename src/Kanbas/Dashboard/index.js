import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <p className="fs-2">Dashboard</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="fw-medium">Published Courses (24)</h3>
            <hr />
          </div>
        </div>
      </div>
      <div className="container mx-0">
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
                  to={`/Kanbas/Courses/${course._id}/home`}
                  className="list-group-item"
                >
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text mb-0">{course._id}</p>
                    <p className="card-text">
                      {course.startDate} to {course.endDate}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
