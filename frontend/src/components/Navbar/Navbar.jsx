/*eslint-disable*/

import ChristmasFather from "../../assets/papanono.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <div className="navbar-main">
        <img
          className="navbar-logo"
          src={ChristmasFather}
          alt="christmas-father-logo"
        />
      </div>
    </Link>
  );
}
export default Navbar;
