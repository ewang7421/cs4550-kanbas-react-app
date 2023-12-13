import { Link, useLocation } from "react-router-dom";

function SignUpNav() {
  const { pathname } = useLocation();
  return (
    <div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link
            to="Home"
            className={`nav-link ${pathname.includes("Home") ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="Search"
            className={`nav-link ${
              pathname.includes("Search") ? "active" : ""
            }`}
          >
            Search
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="Signin"
            className={`nav-link ${
              pathname.includes("Signin") ? "active" : ""
            }`}
          >
            Signin
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="Signup"
            className={`nav-link ${
              pathname.includes("Signup") ? "active" : ""
            }`}
          >
            Signup
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="Account"
            className={`nav-link ${
              pathname.includes("Account") ? "active" : ""
            }`}
          >
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SignUpNav;
