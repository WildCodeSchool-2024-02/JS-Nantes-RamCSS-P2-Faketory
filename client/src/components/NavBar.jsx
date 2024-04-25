import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <img src="./images/logo-faketory.svg" alt="logo faketory" />
      <nav className="nav container">
        <ul className="header-ul">
          <NavLink className="lien" to="/best-of">
            Best Of
          </NavLink>
          <NavLink className="lien" to="/create">
            Créer sa Fake News
          </NavLink>
          <NavLink className="lien" to="/fakeschool">
            Fake School
          </NavLink>
          <NavLink className="lien" to="/connexion">
            <span className="icon-user" />
            Connexion
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
