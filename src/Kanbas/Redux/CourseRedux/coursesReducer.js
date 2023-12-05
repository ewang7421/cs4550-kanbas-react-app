import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  courses: [
    {
      id: "RS101",
      name: "Rocket Propulsion",
      number: "RS4550",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
    },
    {
      id: "RS102",
      name: "Aerodynamics",
      number: "RS4560",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
    },
    {
      id: "RS103",
      name: "Spacecraft Design",
      number: "RS4570",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
    },
  ],
  course: {
    id: "Course ID",
    name: "Course Name",
    number: "Course Number",
    startDate: "startDate",
    endDate: "endDate",
  },
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const newCourses = [...state.courses, { ...action.payload }];
      state.courses = newCourses;
      state.course = {
        id: "Course ID",
        name: "Course Name",
        number: "Course Number",
        startDate: "startDate",
        endDate: "endDate",
      };
    },
    deleteCourse: (state, action) => {
      const newCourses = state.courses.filter(
        (course) => course.id !== action.payload
      );
      state.courses = newCourses;
    },
    updateCourse: (state, action) => {},
    setCourse: (state, action) => {},
  },
});
export const { addCourse, deleteCourse, updateCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
