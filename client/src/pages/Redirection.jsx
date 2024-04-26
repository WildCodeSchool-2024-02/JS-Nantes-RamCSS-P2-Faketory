import "./Redirection.css";
import { useNavigate } from "react-router-dom";

function Redirection() {
  const navigate = useNavigate();

  return (
    <div className="cardd">
      <h1>Vous n'êtes pas connecté ! </h1>
      <h2>Veuillez vous connecter pour accéder à cette page.</h2>
      <button type="button" onClick={() => navigate("/connexion")}>
        Connexion
      </button>
    </div>
  );
}

export default Redirection;
