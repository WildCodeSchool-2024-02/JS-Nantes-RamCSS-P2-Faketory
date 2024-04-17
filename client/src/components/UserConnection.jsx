import { useState, useEffect } from "react";
import newsData from "../Fakenews.json";

import "./UserConnection.css";

function UserConnection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsArticle2, setNewsArticle2] = useState(null);
  const [newsArticle6, setNewsArticle6] = useState(null);

  useEffect(() => {
    const article2 = newsData.fakenews.find((article) => article.id === 2);
    const article6 = newsData.fakenews.find((article) => article.id === 6);
    setNewsArticle2(article2);
    setNewsArticle6(article6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>{username || "User Connection"}</h2>
      <h3> WELCOME </h3>
      <div id="cards" className="cards">
        {newsArticle2 && (
          <div id="card2" className="card">
            <h4>
              {username || "User Connection"}
              {newsArticle2.title}
            </h4>
            <p>{newsArticle2.body}</p>
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

        {newsArticle6 && (
          <div id="card3" className="card">
            <h4>
              {username || "User Connection"}
              {newsArticle6.title}
            </h4>
            <p>{newsArticle6.body}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default UserConnection;
