import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserConnectionContext } from "../Contextes/ConnectionContext";

import "./UserConnection.css";
import Spinner from "../assets/svg-spinners--bars-scale.svg";

function Create() {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [newsArticles, setNewsArticles] = useState([]);
  const [showFullTextCard2, setShowFullTextCard2] = useState(false);

  const [loadingCard2, setLoadingCard2] = useState(true);

  const [randomArticle2, setRandomArticle2] = useState(null);

  const navigate = useNavigate();
  const { isConnected } = useContext(UserConnectionContext);

  if (!isConnected) {
    navigate("/redirection");
  }
  useEffect(() => {
    fetch("http://localhost:3001/api/fakenews")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewsArticles(data.fakenews);
        const randomIndex2 = Math.floor(Math.random() * data.fakenews.length);
        setRandomArticle2(data.fakenews[randomIndex2]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });

    const delayCard2 = Math.random() * 2000 + 1000;

    setTimeout(() => setLoadingCard2(false), delayCard2);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNews = {
      id: randomArticle2.id,
      img: randomArticle2.img,
      title: newsTitle,
      body: newsText,
      author: randomArticle2.author,
      section: randomArticle2.section,
      date: randomArticle2.date,
    };

    fetch("http://localhost:3001/api/usernews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNews),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.warn("News posted successfully", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });
  };

  return (
    <>
      <h1> Créez votre Fake News</h1>
      <div id="cards" className="cards">
        <div id="card1" className="card">
          <form onSubmit={handleSubmit}>
            <label>
              <h5>Ecrivez un titre :</h5>
              <input
                type="text"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
              />
            </label>
            <label>
              <h5>Une phrase d'accroche :</h5>
              <textarea
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
              />
            </label>
            <button type="submit" className="submit">
              Poster
            </button>
          </form>
        </div>
        {randomArticle2 && (
          <div id="card2" key={randomArticle2.id} className="card">
            {loadingCard2 ? (
              <img id="spinner" src={Spinner} alt="Loading..." />
            ) : (
              <>
                <div id="imageTitre">
                  <img id="img2" src={randomArticle2.img} alt="Article" />
                  <h4>{newsTitle || randomArticle2.title}</h4>
                </div>
                <p>
                  {showFullTextCard2
                    ? newsText || randomArticle2.body
                    : `${(newsText || randomArticle2.body).substring(0, 100)}...`}
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
      </div>
    </>
  );
}

export default Create;
