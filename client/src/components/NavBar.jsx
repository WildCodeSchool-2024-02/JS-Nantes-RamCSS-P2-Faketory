import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="header">
        <nav className="nav container">
          <ul>
            <li>Créer</li>
            <li>Voir</li>
            <li>Créer</li>
            <li>Comprendre</li>
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
