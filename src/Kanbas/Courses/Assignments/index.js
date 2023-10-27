import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            id="assignments-assignment-search"
            placeholder="Search for Assignments"
            class="input-group-text"
          />
        </div>
        <div className="col d-flex justify-content-end">
          <button type="button" className="btn btn-light">
            <AiOutlinePlus className="fs-5 pe-1 pb-1" />
            Group
          </button>
          <button type="button" className="btn btn-danger">
            <AiOutlinePlus className="fs-5 pe-1 pb-1" />
            Assignment
          </button>
          <button type="button" className="btn btn-light px-1">
            <FaEllipsisVertical className="fs-5" />
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="list-group rounded-0">
          <div className="list-group-item bg-secondary-subtle fw-medium">
            Assignments
          </div>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item rounded-0 fw-medium"
            >
              <TfiWrite className="fs-1 me-2" />
              {assignment.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
