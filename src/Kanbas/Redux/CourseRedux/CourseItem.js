import { useDispatch } from "react-redux";
import { deleteCourse, setCourse } from "./coursesReducer.js";
function CourseItem({ course }) {
  const dispatch = useDispatch();
  return (
    <li key={course.id} className="list-group-item">
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteCourse(course.id))}
      >
        {" "}
        Delete{" "}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(setCourse(course))}
      >
        {" "}
        Edit{" "}
      </button>
      {course.title}
    </li>
  );
}
export default CourseItem;
