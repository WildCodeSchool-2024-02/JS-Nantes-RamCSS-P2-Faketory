import { useState, useEffect } from "react";
import "./UserConnection.css";

function UserConnection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewsArticles(data.fakenews);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>{username || "User Connection"}</h2>
      <h3> WELCOME </h3>
      <div id="cards" className="cards">
        {newsArticles
          .filter((article) => article.id === 2)
          .map((article) => (
            <div id="card2" key={article.id} className="card">
              <h4>
                {username || article.name}
                {article.title}
              </h4>
              <p>{article.body}</p>
            </div>
          ))}

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
        {newsArticles
          .filter((article) => article.id === 6)
          .map((article) => (
            <div id="card3" key={article.id} className="card">
              <h4>
                {username || article.name}
                {article.title}
              </h4>
              <p>{article.body}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default UserConnection;
