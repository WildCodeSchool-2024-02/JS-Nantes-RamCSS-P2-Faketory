// import { useState } from "react";
import { useEffect, useState } from "react";
import LastNews from "../components/LastNews";
import Sniper from "../components/Sniper";
import "../assets/css/grid.css";
import "../assets/icomoon/style.css";

function Home() {
  // tableau qui associe les vrais et fausses news
  const [arrayNewsAPI, setArrayNewsAPI] = useState([]);

  // la news choisie
  const [choice, setChoice] = useState({});

  // tableau des news choisies
  const [lastNews, setLastNews] = useState([]);

  // function qui random choice and setArrayNewsAPI without choice
  function randomSetChoice(array, trueOrFalse, firstload) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomNew = array[randomIndex];
    randomNew.vote = trueOrFalse;

    setChoice(randomNew);

    if (firstload) {
      // si on utilise la fonction en dehors du useEffect
      // on ajoute le nouveau tableau au user State setArrayNewsAPI
      setArrayNewsAPI(array);

    } else {
      // on enleve la news choisie au tableau contenant toutes les news
      const copyArray = [...array];
      copyArray.splice(randomIndex, 1);
      setArrayNewsAPI(copyArray);
    }
  }

  // ------------
  // Fonction gestion du click
  // ------------
  const handleClick = (value) => {
    if (arrayNewsAPI.length > 0) {
      setLastNews((prevValue) => {
        const newLastNews = [...prevValue, choice];
        return newLastNews;
      })
      // on appelle la fonction
      if (value) {
        randomSetChoice(arrayNewsAPI, true);
      } else {
        randomSetChoice(arrayNewsAPI, false);
      }

    } else {
      setLastNews((prevValue) => {
        const newLastNews = [...prevValue, choice];
        return newLastNews;
      })
      setChoice(undefined)
    }
  };

  // ------------
  // Au chargement de la page 
  // ------------
  useEffect(() => {

    const fakeNews = fetch("http://localhost:3001/api/fakenews");
    const trueNews = fetch("http://localhost:3001/api/truenews");

    Promise.all([fakeNews, trueNews])
      .then(([dataFake, dataTrue]) => {
        const reponseFake = dataFake.json();
        const reponseTrue = dataTrue.json();
        return Promise.all([reponseFake, reponseTrue]);
      })
      .then(([fakeData, trueData]) => {
        const mixNews = [...fakeData.fakenews, ...trueData.truenews]
        // on appelle la fonction
        randomSetChoice(mixNews, '',);

      })

      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
      });

  }, []);



  return (
    <div className="container-fluid mt-5">
      <div className="row animate-child-apparition">
        <div className="col-md-3 d-md-flex flex-column justify-content-md-center">
          <h1>Quelle est la vraie actualité ?</h1>
        </div>
        <div className="col-md-6 text-center">
          <Sniper choice={choice} handleClick={handleClick} />
        </div>
        <div className="col-md-3">
          <LastNews lastNews={lastNews.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
}
export default Home;