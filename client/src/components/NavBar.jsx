import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="header">
        <nav className="nav container">
          <ul>
            {/* <NavLink to="/Best Of">Best Of</NavLink>
            <NavLink to="/Creer sa Fake News">Creer sa Fake News</NavLink>
            <NavLink to="/Fake School">Fake School</NavLink> */}
            <button type="button" className="Connexion">
              Connexion
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
