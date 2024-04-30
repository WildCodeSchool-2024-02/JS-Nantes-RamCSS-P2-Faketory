import { useState, useEffect } from "react";
import SelectNewsCard from "../components/SelectNewsCard";
import "./select-news.css";

function SelectNews() {
  const [news, setNews] = useState([]);
  const [fakeNews, setFakeNews] = useState([]);
  const [checkNewsPair, setCheckNewsPair] = useState([]);
  const [tentative, setTentative] = useState(0);
  const [point, setPoint] = useState(0);

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

  const compteur = (status) => {
    // tentative++
    setTentative(tentative + 1);
    // if status === true => count ++
    // if status === false => rien
    if (status) {
      setPoint(point + 1);
    }

    return [tentative, point];
  };

  const change = (status) => {
    compteur(status);
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
  let sPoint = "";
  let sTentative = "";
  let reponse1 = "";
  let reglement = "";
  if (point > 1) {
    sPoint = "s";
  }
  if (tentative > 1) {
    sTentative = "s";
  }
  if (tentative < 10) {
    reglement =
      "Sur chaque news trouvez, si il s'agit d'une news ou d'une fake news.votre score est afficher en permanence.A la fin vous aurez un conseil en rapport avec votre niveau";
  }

  if (point < 5 && tentative === 10) {
    reponse1 =
      "Un tour sur notre page fakeschool est indispensable dans votre cas !!!. ";
  } else if (point >= 5 && point < 10 && tentative === 10) {
    reponse1 =
      "Il serait préférable de visiter notre page fakeschool pour connaitre quelque pratique pour éviter de croire les fakes news.";
  }
  if (point === 10 && tentative === 10) {
    reponse1 =
      "Nous vous conseillons petit tour sur notre notre page fakeschool pour rester à jour.";
  }
  return (
    <>
      <header className="select-news">
        <h2 id="select-news-title" className="select-news-title">
          News or Fake
        </h2>
        <h2 className="select-news-sub-title">that is the question</h2>
      </header>
      <section className="selectnews">
        {checkNewsPair.length === 2 && (
          <>
            <SelectNewsCard newItem={checkNewsPair[0]} change={change} />
            <p className="reponse">
              Vous avez {point} point{sPoint} pour {tentative} tentative
              {sTentative}.
              <br />
              {reponse1}
              <br />
              {reglement}
              <br />
            </p>
            <SelectNewsCard newItem={checkNewsPair[1]} change={change} />
          </>
        )}
      </section>
    </>
  );
}
export default SelectNews;
