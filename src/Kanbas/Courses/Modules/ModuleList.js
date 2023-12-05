import { React, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList({ editMode }) {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  return (
    <ul className="list-group">
      {editMode && (
        <li className="list-group-item">
          <div className="modules-edit-form">
            <button onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            <button
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
        </li>
      )}

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item my-3 border rounded-0 bg-secondary-subtle"
          >
            <span className="d-flex">
              <h3>{module.name}</h3>
              {editMode && (
                <div className="ms-auto">
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                </div>
              )}
            </span>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
