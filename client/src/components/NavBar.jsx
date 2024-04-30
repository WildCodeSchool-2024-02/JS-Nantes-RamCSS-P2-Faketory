import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="./images/logo-faketory.svg" alt="logo faketory" />
      </NavLink>
      <nav className="nav-container">
        <ul className="header-ul">
          <NavLink className="lien" to="/select-news">
            Quizz
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
