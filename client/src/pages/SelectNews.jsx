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
    fetch("http://localhost:3000/src/news.json")
      .then((response) => response.json())
      .then((data) => setContent1(data.fakenews));
  }, []);

  if (content.length === 0 || content1.length === 0) {
    return "Chargement...";
  }
  const max = content1.length;
  const min = 0;
  let ide = Math.floor(Math.random() * (max - min)) + min
  ide+=0;
  const choice = Math.floor(Math.random() * (max - min)) + min;
  const checknews = [];
  if (choice === 0) {
    checknews.push(content[ide], content1[ide]);
  } else {
    checknews.push(content1[ide], content[ide]);
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
          <img src={contentLeft[ide].img} alt="" />
          <h2>
            {contentLeft[ide].name}
            {contentLeft[ide].title}
          </h2>
          <p>&nbsp;</p>
        </article>
        <article>
          <img src={contentRight[ide].img} alt="" />
          <h2>
            {contentRight[ide].name}
            {contentRight[ide].title}
          </h2>
          <p>&nbsp;</p>
        </article>
      </section>
    </>
  );
}
export default SelectNews;
