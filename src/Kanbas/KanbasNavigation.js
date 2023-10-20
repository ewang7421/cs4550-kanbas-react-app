import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./KanbasNavigation.css";

import { IconContext } from "react-icons";

import { BsSpeedometer2, BsClock, BsQuestionCircle } from "react-icons/bs";
import { VscAccount, VscCalendar } from "react-icons/vsc";
import { RiBook2Line } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { GoInbox } from "react-icons/go";
import { PiMonitorPlay } from "react-icons/pi";

function KanbasNavigation() {
  const links = [
    { name: "Account", icon: <VscAccount class="grey-icon" /> },
    { name: "Dashboard", icon: <BsSpeedometer2 /> },
    { name: "Courses", icon: <RiBook2Line /> },
    { name: "Groups", icon: <BiGroup /> },
    { name: "Calendar", icon: <VscCalendar /> },
    { name: "Inbox", icon: <GoInbox /> },
    { name: "History", icon: <BsClock /> },
    { name: "Studio", icon: <PiMonitorPlay /> },
    { name: "Help", icon: <BsQuestionCircle /> },
  ];
  const { pathname } = useLocation();
  return (
    <div class="d-none d-md-block justify-content-center">
      <div class="kanbas-navigation-thumbnail">
        <a href="#">
          <img src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png" />
        </a>
      </div>
      <IconContext.Provider value={{ size: 30 }}>
        <div className="wd-kanbas-navigation">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/${link.name}`}
              className={`list-group-item ${
                pathname.includes(link) && "active"
              }`}
            >
              {link.icon}
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default KanbasNavigation;
