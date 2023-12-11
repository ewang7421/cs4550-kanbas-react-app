import db from "../../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useLocation } from "react-router-dom";

function Breadcrumb({ course }) {
  const { courseId } = useParams();
  const location = useLocation();
  let breadcrumbItems = location.pathname.split("/");
  if (location.pathname.includes("Courses")) {
    const removeIndex = breadcrumbItems.findIndex((a) => a === "Courses");
    breadcrumbItems = breadcrumbItems.slice(3);
    if (
      breadcrumbItems.includes("Assignments") &&
      breadcrumbItems.length >
        breadcrumbItems.findIndex((a) => a === "Assignments") + 1
    ) {
      const assignmentIndex =
        breadcrumbItems.findIndex((a) => a === "Assignments") + 1;
      breadcrumbItems[assignmentIndex] = db.assignments.find(
        (assignment) => assignment._id === breadcrumbItems[assignmentIndex]
      ).title;
    }
  }

  return (
    <div className="col d-flex">
      <AiOutlineMenu className="mt-1 me-2 fs-4 kanbas-red" />
      <nav aria-label="breadcrumb" className="kanbas-breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbItems.map((item, index) => (
            <li className="breadcrumb-item kanbas-red">
              <Link
                key={index}
                to={`/Kanbas/Courses/${breadcrumbItems
                  .slice(0, index + 1)
                  .join("/")}`}
                className={
                  index === breadcrumbItems.length - 1
                    ? "breadcrumb-link-current"
                    : "breadcrumb-link"
                }
              >
                {index == 0 ? course.name : item}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
export default Breadcrumb;
