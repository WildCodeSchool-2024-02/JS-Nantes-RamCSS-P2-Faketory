import { useState, useEffect } from "react";
import SelectNewsCard from "../components/SelectNewsCard";
import "./select-news.css";

function SelectNews() {
  const [news, setNews] = useState([]);
  const [fakeNews, setFakeNews] = useState([]);
  const [checkNewsPair, setCheckNewsPair] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/src/news.json")
      .then((response) => response.json())
      .then((data) => {
        const max = data.fakenews.length;
        // const min = 0;
        const ide = Math.floor(Math.random() * max);
        const choice = Math.floor(Math.random() * 2);

        if (choice === 0) {
          setCheckNewsPair([data.news[ide], data.fakenews[ide]]);
        } else {
          setCheckNewsPair([data.fakenews[ide], data.news[ide]]);
        }

        setNews(() => {
          const filteredNews = data.news.filter((el, index) => {
            if (index === ide) {
              return false;
            }
            return true;
          });
          return filteredNews;
        });
        setFakeNews(() => {
          const filteredFakeNews = data.fakenews.filter((el, index) => {
            if (index === ide) {
              return false;
            }
            return true;
          });
          return filteredFakeNews;
        });
      });
  }, []);

  const change = () => {
    const ide = Math.floor(Math.random() * fakeNews.length);

    const choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
      setCheckNewsPair([news[ide], fakeNews[ide]]);
    } else {
      setCheckNewsPair([fakeNews[ide], news[ide]]);
    }
    setNews((prevTrueValue) => {
      const filteredNews = prevTrueValue.filter((el, index) => {
        if (index === ide) {
          return false;
        }
        return true;
      });
      return filteredNews;
    });
    setFakeNews((prevFakeValue) => {
      const filteredFakeNews = prevFakeValue.filter((el, index) => {
        if (index === ide) {
          return false;
        }
        return true;
      });
      return filteredFakeNews;
    });
  };

  return (
    <>
      <header className="select-news">
        <h1>News or Fake</h1>
        <h2>that is the question</h2>
      </header>
      <section className="selectnews">
        {checkNewsPair.length === 2 && (
          <>
            <SelectNewsCard newItem={checkNewsPair[0]} change={change} />
            <SelectNewsCard newItem={checkNewsPair[1]} change={change} />
          </>
        )}
      </section>
    </>
  );
}
export default SelectNews;
