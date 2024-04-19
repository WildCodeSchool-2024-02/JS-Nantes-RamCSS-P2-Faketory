import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar2() {
  return (
    <header>
      <div className="header">
        <nav className="nav container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/best-of">Best Of</NavLink>
            </li>
            <li>
              <NavLink to="/create">Creer sa Fake News</NavLink>
            </li>
            <li>
              <NavLink to="/fakeschool">Fake School</NavLink>
            </li>
            <li>
              <NavLink to="/connexion">Connexion</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar2;
