/*eslint-disable*/

import ChristmasFather from "../../assets/papanono.svg";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import MiniGame from "../../assets/mini-game.svg";

function Navbar() {
  const location = useLocation();
  console.log(location);

  const path = location.pathname;

  return (
    <nav className="navbar-container">
      <Link className="logo-home-navbar" to="/">
        <img
          className="img-home-navbar"
          src={ChristmasFather}
          alt="christmas-father-logo"
        />
      </Link>

      {/* {path === "/jokerandom" && (
        <Link className="logo-game-navbar" to="/">
          <img
            className="img-game-navbar"
            src={MiniGame}
            alt="logo-mini-jeux"
          />
        </Link>
      )} */}
    </nav>
  );
}
export default Navbar;
