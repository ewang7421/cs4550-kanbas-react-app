import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-ewang-3f6d180f75ea.herokuapp.com/api/courses";
const MODULES_URL = "https://kanbas-node-server-app-ewang-3f6d180f75ea.herokuapp.com/api/modules";
export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id.$oid}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};
