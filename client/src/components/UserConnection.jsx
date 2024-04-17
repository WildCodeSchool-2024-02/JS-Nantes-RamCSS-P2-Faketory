import { useState, useEffect } from "react";
import newsData from "../Fakenews.json"; 

import "./UserConnection.css";

function UserConnection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsArticle, setNewsArticle] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const article = newsData.fakenews.find((article) => article.id === 2);
    setNewsArticle(article);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <>
        <h2>{username || "User Connection"}</h2>
        <h3> WELCOME </h3>
        <div id="cards" className="cards">
          {newsArticle && (
              <div id="card2" className="card">
                <h4>{newsArticle.title}</h4>
                <p>{newsArticle.body}</p>
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
              <button type="button" className="submit">
                Se connecter
              </button>
              <h5>Vous n'avez pas de compte ?</h5>
              <a href="/register">Créer un compte</a>
            </form>
          </div>

          <div id="card3" className="card">
            <h4>8 ans de prison pour {username || "Jacky LAMBROUILLE"}</h4>
            <p>
              “Neque porro quisquam est, ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.”
            </p>
          </div>
        </div>
      </>
  );
}

export default UserConnection;