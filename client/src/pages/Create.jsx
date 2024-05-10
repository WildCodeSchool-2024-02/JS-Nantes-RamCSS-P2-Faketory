import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserConnectionContext } from "../Contextes/ConnectionContext";

import BanniereTest from "../components/BanniereTest";
import "./UserConnection.css";
import Spinner from "../assets/svg-spinners--bars-scale.svg";

function Create() {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [showFullTextCard2] = useState(false);

  const [loadingCard2, setLoadingCard2] = useState(true);

  const [randomArticle2, setRandomArticle2] = useState(null);

  const selectRandomArticle = (articles) => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  };

  const navigate = useNavigate();
  const { isConnected, username } = useContext(UserConnectionContext);

  if (!isConnected) {
    navigate("/redirection");
  }
  useEffect(() => {
    fetch("http://localhost:3310/api/trueNews2")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewsArticles(data.fakenews);
        setRandomArticle2(selectRandomArticle(data.fakenews));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });

    const delayCard2 = Math.random() * 2000 + 1000;

    setTimeout(() => setLoadingCard2(false), delayCard2);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3010/api/usernews")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const newsData = data.newNews || [];
        const highestId =
          newsData.length > 0
            ? Math.max(...newsData.map((news) => news.id))
            : -1;
        const newId = highestId + 1;

        const newNews = {
          id: newId,
          img: randomArticle2.img,
          title: newsTitle,
          body: newsText,
          author: username,
          section: randomArticle2.section,
          date: randomArticle2.date,
        };

        fetch("http://localhost:3010/api/usernews", {
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
          .then(() => {
            setNewsTitle("");
            setNewsText("");
            setRandomArticle2(selectRandomArticle(newsArticles));
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation: ",
              error
            );
          });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });
  };

  return (
    <>
      <h1> Créez votre Fake News</h1>
      <BanniereTest />
      <div id="cards" className="cards">
        <div id="card1" className="card">
          <form onSubmit={handleSubmit}>
            <label>
              <h5>Ispirez-vous de l'image et</h5>
              <h5>écrivez un titre :</h5>
              <textarea
                type="text"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
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
                <p>{randomArticle2.section}</p>
                <div id="imageTitre">
                  <img id="img2" src={randomArticle2.img} alt="Article" />
                  <h4>{newsTitle || randomArticle2.title}</h4>
                </div>
                <p>
                  {showFullTextCard2
                    ? (newsText || randomArticle2.body).replace(/\n/g, "<br />")
                    : `${(newsText || randomArticle2.body).substring(0, 100)}`}
                </p>

                <div id="auteur">
                  <p>{username}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Create;
