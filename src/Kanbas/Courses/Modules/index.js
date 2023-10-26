import ModuleList from "./ModuleList";

import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
function Modules() {
  return (
    <div>
      <div className="container">
        <div className="row mb-3">
          <div className=" mb-3 d-flex flex-row-reverse">
            <button type="button" class="btn btn-light px-1">
              <FaEllipsisVertical class="fs-5" />
            </button>
            <button type="button" class="btn btn-danger">
                <AiOutlinePlus class="fs-5 pe-1 pb-1"/>
              Modules
            </button>
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <AiOutlineCheckCircle class="text-success fs-5 " />
              Publish All
            </button>
            <button type="button" class="btn btn-light">
              View Progress
            </button>
            <button type="button" class="btn btn-light">
              Collapse All
            </button>
            <br />
          </div>
          <hr />
        </div>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
