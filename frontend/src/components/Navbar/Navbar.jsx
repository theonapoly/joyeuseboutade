import ChristmasFather from "../../assets/papanono.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar-main">
      <img
        className="navbar-logo"
        src={ChristmasFather}
        alt="christmas-father-logo"
      />
    </div>
  );
}
export default Navbar;
