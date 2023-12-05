import React from "react";
import { useSelector } from "react-redux";
import CourseEditForm from "./CourseEditForm";

import CourseItem from "./CourseItem";
function CourseEditList() {
  const { courses } = useSelector((state) => state.coursesReducer);
  return (
    <div>
      <h2>Course List</h2>
      <ul className="list-group">
        <CourseEditForm />
        {courses.map((course) => (
          <CourseItem course={course} />
        ))}
      </ul>
    </div>
  );
}
export default CourseEditList;
