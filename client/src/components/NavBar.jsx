import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="header">
        <img src="./images/logo-faketory.svg" alt="" />
        <nav className="nav container">
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/best-of">Best Of</NavLink>
            <NavLink to="/create">Creer sa Fake News</NavLink>
            <NavLink to="/fakeschool">Fake School</NavLink>
            <NavLink to="/connexion">Connexion</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
