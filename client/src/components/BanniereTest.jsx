import { useState, useEffect } from "react";
import "./BanniereTest.css";

function BanniereTest() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [showFullTextCard2] = useState(false);

  useEffect(() => {
    const fetchNewsArticles = () => {
      fetch("http://localhost:3310/api/usernews")
        .then((response) => response.json())
        .then((data) => {
          setNewsArticles(data.newNews.slice(-3));
        })
        .catch((error) =>
          console.error("There was a problem with the fetch operation: ", error)
        );
    };
    fetchNewsArticles();
    const intervalId = setInterval(fetchNewsArticles, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="caroussel">
      <figure>
        {newsArticles &&
          newsArticles.map((article, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} id="card2" className="card">
              <div id="imageTitre">
                <img className="img2" src={article.img} alt="Article" />
                <h4>
                  {article.name}
                  {article.title}
                </h4>
              </div>
              <p>
                {showFullTextCard2
                  ? article.body
                  : `${article.body.substring(0, 60)}`}
              </p>
              {article.author}
            </div>
          ))}
      </figure>
    </div>
  );
}

export default BanniereTest;
