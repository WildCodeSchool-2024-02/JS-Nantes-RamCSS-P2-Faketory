import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./UserConnection.css";
import Spinner from "../assets/svg-spinners--bars-scale.svg";
import { UserConnectionContext } from "../Contextes/ConnectionContext";

function UserConnection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [newsArticles, setNewsArticles] = useState([]);
  const [showFullTextCard2, setShowFullTextCard2] = useState(false);
  const [showFullTextCard3, setShowFullTextCard3] = useState(false);
  const [loadingCard2, setLoadingCard2] = useState(true);
  const [loadingCard3, setLoadingCard3] = useState(true);
  const [randomArticle2, setRandomArticle2] = useState(null);
  const [randomArticle3, setRandomArticle3] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const { handleLogin } = useContext(UserConnectionContext);

  useEffect(() => {
    fetch("http://localhost:3001/api/fakenewsnom")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewsArticles(data.fakenewsnom);
        const randomIndex2 = Math.floor(
          Math.random() * data.fakenewsnom.length
        );
        let randomIndex3;
        do {
          randomIndex3 = Math.floor(Math.random() * data.fakenewsnom.length);
        } while (randomIndex2 === randomIndex3);
        setRandomArticle2(data.fakenewsnom[randomIndex2]);
        setRandomArticle3(data.fakenewsnom[randomIndex3]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });

    const delayCard2 = Math.random() * 2000 + 1000;
    const delayCard3 = Math.random() * 2000 + 1000;

    setTimeout(() => setLoadingCard2(false), delayCard2);
    setTimeout(() => setLoadingCard3(false), delayCard3);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        setErrorMessage("Échec de l'authentification. Veuillez réessayer.");
      });
  };

  return (
    <>
      <h1 aria-label={username || "User Connection"}>
        {username || "User Connection"}
        <br />
        WELCOME
      </h1>
      <div id="cards" className="cards">
        {randomArticle2 && (
          <div id="card2" key={randomArticle2.id} className="card">
            {loadingCard2 ? (
              <img id="spinner" src={Spinner} alt="Loading..." />
            ) : (
              <>
                <div id="imageTitre">
                  <img id="img2" src={randomArticle2.img} alt="Article" />
                  <h4>
                    {username || randomArticle2.name}
                    {randomArticle2.title}
                  </h4>
                </div>
                <p>
                  {showFullTextCard2
                    ? randomArticle2.body
                    : `${randomArticle2.body.substring(0, 100)}...`}
                </p>
                <button
                  className="plus"
                  type="button"
                  onClick={() => setShowFullTextCard2(!showFullTextCard2)}
                >
                  {showFullTextCard2 ? "Lire moins" : "Lire plus"}
                </button>
              </>
            )}
          </div>
        )}
        <div id="card1" className="card">
          <form onSubmit={handleSubmit}>
            <label>
              <h5>Nom d'utilisateur :</h5>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <h5> Mot de passe :</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className="submit">
              Se connecter
            </button>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <h5>Vous n'avez pas de compte ?</h5>
            <button
              type="button"
              className="submit"
              onClick={() => navigate("/newuser")}
            >
              Créer un compte
            </button>
          </form>
        </div>
        {randomArticle3 && (
          <div id="card3" key={randomArticle3.id} className="card">
            {loadingCard3 ? (
              <img id="spinner" src={Spinner} alt="Loading..." />
            ) : (
              <>
                <div id="imageTitre">
                  <img id="img3" src={randomArticle3.img} alt="Article" />
                  <h4>
                    {username || randomArticle3.name}
                    {randomArticle3.title}
                  </h4>
                </div>
                <p>
                  {showFullTextCard3
                    ? randomArticle3.body
                    : `${randomArticle3.body.substring(0, 100)}...`}
                </p>
                <button
                  className="plus"
                  type="button"
                  onClick={() => setShowFullTextCard3(!showFullTextCard3)}
                >
                  {showFullTextCard3 ? "Lire moins" : "Lire plus"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default UserConnection;
