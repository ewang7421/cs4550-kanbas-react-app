import Signin from "./Users/signin.js";
import Account from "./Users/account.js";
import SignUpNav from "./SignUpNav.js";
import { Route, Routes, Navigate } from "react-router";
import UserTable from "./Users/table.js";
import Signup from "./Users/signup.js";

function Assignment6() {
  return (
    <div className="row">
      <div className="col-2">
        <SignUpNav />
      </div>
      <div className="col">
        <Routes>
          <Route path="/" element={<Navigate to="Signin" />} />
          <Route path="/Home" element={<h1>Home</h1>} />
          <Route path="/Search" element={<h1>Search</h1>} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Assignment6;
