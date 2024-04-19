import "./fake-school.css";
import photo from "../assets/images/photo.jpg";

function FakeSchool() {
  const content = [
    {
      title: "Observer les détails",
      classadapt: "one",
      content:
        "Le titre, les dates, la structure du site… Dans les fake news, le titre est souvent accrocheur, peut être écrit en majuscules, avec des points d’exclamation. Si l’article ne mentionne pas de dates ou de lieux précis, il y a de quoi douter.",
      picture: photo,
    },
    {
      title: "Vérifier qu’il s’agit d’une source fiable",
      classadapt: "twoo",
      content:
        "On peut s’assurer de la crédibilité d’un site Internet par sa réputation. Certains publient des articles parodiques comme Le Gorafi ou Nord Presse. En cas de doute, l’outil Décodex du Monde permet de vérifier la fiabilité d’une source d’information.",
      picture: photo,
    },
    {
      title: "Privilégier les sources d’informations reconnues",
      classadapt: "tree",
      content:
        "Elles se repèrent avec avec des urls telles que .gouv.fr, .org, .asso.fr. Les blogs et sites personnels seront à regarder avec plus de vigilance.",
      picture: photo,
    },
    {
      title: "Varier les sources d’information",
      classadapt: "for",
      content:
        "En consultant d’autres articles sur le même sujet, on peut comparer et croiser les données. Si une même information est évoquée à plusieurs endroits, en citant les mêmes sources, il est plus probable qu’elle soit vraie.",
      picture: photo,
    },
    {
      title: "Décrypter les images",
      classadapt: "five",
      content:
        "Trouver la source d’une image pour la contextualiser, être attentif à sa construction, ou encore utiliser des moteurs de recherche d’images inversées comme Google images ou Tineye.com, pour vérifier qu’une image n’est pas détournée.",
      picture: photo,
    },
    {
      title: "Sur le web et les réseaux sociaux",
      classadapt: "six",
      content:
        "Sur Internet et les réseaux sociaux, tout le monde peut créer et diffuser des informations. Il est donc essentiel d’adopter une posture d’enquêteur pour vérifier la fiabilité de l’information. En cas de doute, on évite de liker et partager pour ne pas donner plus de visibilité aux fake news.",
      picture: photo,
    },
    {
      title: "titre7",
      classadapt: "seven",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quis molestiae quaerat sit voluptates officia. Voluptate eos natus voluptatum repellat qui corporis explicabo sapiente soluta veniam est, nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquid facere! Magnam consectetur aspernatur error laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius sequi ducimus autem quo qui.",
      picture: photo,
    },
    {
      title: "titre8",
      classadapt: "eight",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quismolestiae quaerat sit voluptates officia. Voluptate eos natus voluptatum repellat qui corporis explicabo sapiente soluta veniam est, nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquid facere! Magnam consectetur aspernatur error laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius sequi ducimus autem quo qui.",
      picture: photo,
    },
  ];
  // declare the function
  function shuffle(array) {
    let currentIndex = array.length;
    const thisArray = array;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Échange les éléments
      const temp = array[currentIndex];
      thisArray[currentIndex] = array[randomIndex];
      thisArray[randomIndex] = temp;
    }

    return thisArray;
  }

  // Usage
  const shuffledArray = shuffle(content);
  return (
    <section className="contener">
      <h1 className="title">Fake School</h1>
      {shuffledArray.map((value) => (
        <article key={value.title} className={value.classadapt}>
          <h2>{value.title}</h2>
          <p>{value.content}</p>
        </article>
      ))}
    </section>
  );
}
export default FakeSchool;
