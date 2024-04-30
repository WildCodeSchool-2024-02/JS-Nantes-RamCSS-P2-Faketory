/* eslint-disable react/prop-types */
import "../assets/css/grid.css";
import "../App.css";
import "./last-news.css";

function LastNewsSkeleton() {
  return (
    <figure className="last-news animate-skeleton">
      <div className="last-news-img" />
      <div className="last-news-infos">
        <div className="last-news-infos-line" />
        <div className="last-news-infos-line" />
        <div className="last-news-infos-line" />
      </div>
    </figure>
  );
}

function LastNews({ lastNews }) {
  return (
    <aside className="last-news-container">
      <h2>Les dernières actualités</h2>

      {lastNews.length > 0 &&
        lastNews.map((lastNew) => (
          <figure
            key={lastNew.title + lastNew.id}
            className="last-news animate-skeleton"
          >
            <div className="last-news-img">
              <img
                src={lastNew.img}
                alt={lastNew.title}
                className="img-fluid"
              />
            </div>
            <figcaption className="last-news-infos">{lastNew.title}</figcaption>
          </figure>
        ))}

      {Array.from({ length: 4 - lastNews.length }).map(() => (
        <LastNewsSkeleton key={Math.random() * 1000} />
      ))}
    </aside>
  );
}

export default LastNews;
