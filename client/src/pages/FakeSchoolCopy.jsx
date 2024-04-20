import "./fake-school.css";
import photo from "../assets/images/photo.jpg";

function FakeSchool() {
  const content = [
    {
      title: "Observer les détails",
      content:
        "Le titre, les dates, la structure du site… Dans les fake news, le titre est souvent accrocheur, peut être écrit en majuscules, avec des points d’exclamation. Si l’article ne mentionne pas de dates ou de lieux précis, il y a de quoi douter.",
      picture: photo,
    },
    {
      title: "Vérifier qu’il s’agit d’une source fiable",
      content:
        "On peut s’assurer de la crédibilité d’un site Internet par sa réputation. Certains publient des articles parodiques comme Le Gorafi ou Nord Presse. En cas de doute, l’outil Décodex du Monde permet de vérifier la fiabilité d’une source d’information.",
      picture: photo,
    },
    {
      title: "Privilégier les sources d’informations reconnues",
      content:
        "Les sources d'une information sont primordiales pour déterminer sa crédibilité. L'origine d'un chiffre ou d'une citation, quand elle est mentionnée, permet au lecteur de s'y référer directement. Certains sites proposent des liens hypertextes renvoyant vers les sites sources.",
      picture: photo,
    },
    {
      title: "Varier les sources d’information",
      content:
        "En consultant d’autres articles sur le même sujet, on peut comparer et croiser les données. Si une même information est évoquée à plusieurs endroits, en citant les mêmes sources, il est plus probable qu’elle soit vraie.",
      picture: photo,
    },
    {
      title: "Décrypter les images",
      content:
        "Trouver la source d’une image pour la contextualiser, être attentif à sa construction, ou encore utiliser des moteurs de recherche d’images inversées comme Google images ou Tineye.com, pour vérifier qu’une image n’est pas détournée.",
      picture: photo,
    },
    {
      title: "Sur le web et les réseaux sociaux",
      content:
        "Sur Internet et les réseaux sociaux, tout le monde peut créer et diffuser des informations. Il est donc essentiel d’adopter une posture d’enquêteur pour vérifier la fiabilité de l’information. En cas de doute, on évite de liker et partager pour ne pas donner plus de visibilité aux fake news.",
      picture: photo,
    },
    {
      title: "Quels sont les objectifs du site ?",
      content:
        "Un site peut avoir pour objectif de vendre, d'informer, de militer, de convaincre, de manipuler, de faire peur ou encore de faire le buzz. En fonction de l'objectif du site, l'information n'a pas la même pertinence.",
      picture: photo,
    },
    {
      title: '"Les Chaînes" Risque de diffuser de la fake news ?',
      content:
        "Ne pas faire suivre machinalement un message que l'on vous demande de transférer à tous vos correspondants fait partie des bonnes pratiques de l'Internet : c'est un acte civique, qui témoigne du respect que vous portez à vos contacts et qui permet notamment de lutter contre la pollution des boîtes aux lettres. Le simple fait de connaître l'existence des hoax aide déjà à ne plus tomber dans leur piège. D'autres conseils de Prévention permettent d'identifier plus facilement les hoax, voire de ne pas devenir soi-même l'auteur involontaire d'une nouvelle cyber-rumeur",
      picture: photo,
    },
  ];

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
