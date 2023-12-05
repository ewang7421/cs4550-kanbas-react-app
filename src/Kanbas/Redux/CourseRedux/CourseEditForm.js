import { useSelector, useDispatch } from "react-redux";
import { addCourse, updateCourse, setCourse } from "./coursesReducer";

function CourseEditForm() {
  const { course } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button
        className="btn btn-success"
        onClick={() => dispatch(addCourse(course))}
      >
        {" "}
        Add{" "}
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(updateCourse(course))}
      >
        {" "}
        Update{" "}
      </button>
      <input
        value={course.title}
        onChange={(e) =>
          dispatch(setCourse({ ...course, title: e.target.value }))
        }
      />
    </li>
  );
}
export default CourseEditForm;
