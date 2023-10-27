import Modules from "../Modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function Home() {
  const buttons = [
    {
      text: "Import Existing Content",
      icon: "",
    },
    {
      text: "Import From Commons",
      icon: "",
    },
    {
      text: "Choose Home Page",
      icon: "",
    },
    {
      text: "View Course Stream",
      icon: "",
    },
    {
      text: "New Announcement",
      icon: "",
    },
    {
      text: "New Analytics",
      icon: "",
    },
    {
      text: "View Course Notifications",
      icon: "",
    },
  ];
  return (
    <div className="row">
      <div className="col">
        <Modules />
      </div>
      <div className="col col-sm-2 d-none d-lg-block fixed-width-215">
        {buttons.map((item) => (
          <button type="button" className="btn btn-light w-100 text-start">
            {item.text}
          </button>
        ))}
        <p className="pt-3 pb-0 mb-0">To Do</p>
        <hr className="mt-1" />
        <p className="kanbas-red mb-0">Grade A1 - ENV + HTML</p>
        <p className="text-secondary ">100 points . Sep 18 at 11:59pm</p>
      </div>
    </div>
  );
}
export default Home;
