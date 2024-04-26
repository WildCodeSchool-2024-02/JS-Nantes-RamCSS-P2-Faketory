import { useState, useEffect } from "react";
import "./select-news.css";

function SelectNews() {
  const [content, setContent] = useState([]);
  const [content1, setContent1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/src/news.json")
      .then((response) => response.json())
      .then((data) => setContent(data.news));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/api/fakenews")
      .then((response) => response.json())
      .then((data) => setContent1(data.fakenews));
  }, []);
  if (content.length === 0 || content1.length === 0) {
    return "Chargement...";
  }
  const choice = Math.floor(Math.random() * 2);
  const checknews = [];
  if (choice === 0) {
    checknews.push(content);
  } else {
    checknews.push(content1);
  }
  if (choice === 1) {
    checknews.push(content);
  } else {
    checknews.push(content1);
  }
  const contentLeft = checknews[0];
  const contentRight = checknews[1];
  return (
    <>
      <header className="select-news">
        <h1>News or Fake</h1>
        <h2>that is the question</h2>
      </header>
      <section className="selectnews">
        <article>
          <img src={contentLeft[0].img} alt="" />
          <h2>
            {contentLeft[0].name}
            {contentLeft[0].title}
          </h2>
          <p>&nbsp;</p>
        </article>
        <article>
          <img src={contentRight[0].img} alt="" />
          <h2>
            {contentRight[0].name}
            {contentRight[0].title}
          </h2>
          <p>&nbsp;</p>
        </article>
      </section>
    </>
  );
}
export default SelectNews;
