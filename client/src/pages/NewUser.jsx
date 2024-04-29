import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";

function NewUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.warn("User created successfully:", data);
        navigate("/connexion");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="NewUser">
      <h1>Créer un compte</h1>
      <p>
        Vous avez déjà un compte ? <a href="/connexion">Connectez-vous</a>
      </p>
      <div id="card1" className="card">
        <form onSubmit={handleSubmit}>
          <label>
            Nom d'utilisateur :
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Mot de passe :
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Créer un compte</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default NewUser;
