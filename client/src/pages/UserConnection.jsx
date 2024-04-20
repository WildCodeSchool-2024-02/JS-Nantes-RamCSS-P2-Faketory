import { useState, useEffect } from "react";
import "./UserConnection.css";

// Importez votre spinner SVG
import Spinner from '../assets/svg-spinners--bars-scale.svg';

function UserConnection() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newsArticles, setNewsArticles] = useState([]);
    const [showFullTextCard2, setShowFullTextCard2] = useState(false);
    const [showFullTextCard3, setShowFullTextCard3] = useState(false);
    const [loadingCard2, setLoadingCard2] = useState(true);
    const [loadingCard3, setLoadingCard3] = useState(true);

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

        setTimeout(() => setLoadingCard2(false), 3000);
        setTimeout(() => setLoadingCard3(false), 3000);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h2 aria-label={username || "User Connection"}>{username || "User Connection"}</h2>
            <h3> WELCOME </h3>
            <div id="cards" className="cards">
                {newsArticles
                    .filter((article) => article.id === 2)
                    .map((article) => (
                        <div id="card2" key={article.id} className="card">
                            {loadingCard2 ? (
                                <img src={Spinner} alt="Loading..." />
                            ) : (
                                <>
                                    <h4>
                                        {username || article.name}
                                        {article.title}
                                    </h4>
                                    <p>
                                        {showFullTextCard2 ? article.body : `${article.body.substring(0, 100)}...`}
                                    </p>
                                    <button type="button" onClick={() => setShowFullTextCard2(!showFullTextCard2)}>
                                        {showFullTextCard2 ? 'Lire moins' : 'Lire plus'}
                                    </button>
                                </>
                            )}
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
                            {loadingCard3 ? (
                                <img src={Spinner} alt="Loading..." />
                            ) : (
                                <>
                                    <h4>
                                        {username || article.name}
                                        {article.title}
                                    </h4>
                                    <p>
                                        {showFullTextCard3 ? article.body : `${article.body.substring(0, 100)}...`}
                                    </p>
                                    <button type="button" onClick={() => setShowFullTextCard3(!showFullTextCard3)}>
                                        {showFullTextCard3 ? 'Lire moins' : 'Lire plus'}
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
}

export default UserConnection;