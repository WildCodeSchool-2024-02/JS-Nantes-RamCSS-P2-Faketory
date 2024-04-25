import { useState, useEffect } from "react";

import "./select-news.css";

function SelectNews() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/news.json")
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  if (content.length === 0) {
    return "Chargement...";
  }

  return (
    <>
      <header className="select-news">
        <h1>News or Fake</h1>
        <h2>that is the question</h2>
      </header>
      <section className="selectnews">
        <article>
          <img src={content[0].img} alt="" />
        </article>
        <article>
          <img src={content[0].img} alt="" />
        </article>
      </section>
    </>
  );
}

export default SelectNews;
