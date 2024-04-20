import { useState, useEffect } from "react";

import "./fake-school.css";

function FakeSchool() {
  const [donnees, setDonnees] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/src/Fakeschool.json")
      .then((response) => response.json())
      .then((data) => setDonnees(data));
  }, []); // Passer un tableau vide comme dépendance pour exécuter l'effet une seule fois au chargement du composant
  const content = donnees;

  if (donnees === null) {
    return "Chargement...";
  }

  let currentIndex = content.length;
  const thisArray = content;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Échange les éléments
    const temp = content[currentIndex];
    thisArray[currentIndex] = content[randomIndex];
    thisArray[randomIndex] = temp;
  }

  const classindex = "position";
  return (
    <section className="contener">
      <h1 className="title">Fake School</h1>
      {thisArray.map((value, index) => (
        <article key={value.title} className={classindex + index}>
          <h2>{value.title}</h2>
          <p>{value.content}</p>
        </article>
      ))}
    </section>
  );
}
export default FakeSchool;
