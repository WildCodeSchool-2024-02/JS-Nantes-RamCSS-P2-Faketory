import "../assets/css/grid.css";
import "../App.css";
import "./last-news.css";

/* <figure className="last-news">
<div className="last-news-img"><img src="jiji.jpg" alt="" /></div>
<figcaption className="last-news-infos">Jijy, le chat de Stéphanie</figcaption>
</figure> */

function LastNews() {
  return (
    <aside className="last-news-container">
      <h2>Les dernièrs actualités</h2>
      <figure className="last-news animate-skeleton">
        <div className="last-news-img" />
        <div className="last-news-infos">
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
        </div>
      </figure>
      <figure className="last-news animate-skeleton">
        <div className="last-news-img" />
        <div className="last-news-infos">
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
        </div>
      </figure>
      <figure className="last-news animate-skeleton">
        <div className="last-news-img" />
        <div className="last-news-infos">
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
          <div className="last-news-infos-line" />
        </div>
      </figure>
    </aside>
  );
}

export default LastNews;
