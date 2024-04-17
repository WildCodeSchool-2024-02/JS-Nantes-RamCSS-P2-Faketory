import "../styles/fake-school.css";
import photo from "../assets/images/photo.jpg";

function FakeSchool() {
  const content = [
    {
      title: <h2>Observer les détails</h2>,
      content: (
        <p>
          Le titre, les dates, la structure du site… Dans les fake news, le
          titre est souvent accrocheur, peut être écrit en majuscules, avec des
          points d’exclamation. Si l’article ne mentionne pas de dates ou de
          lieux précis, il y a de quoi douter.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>Vérifier qu’il s’agit d’une source fiable</h2>,
      content: (
        <p>
          On peut s’assurer de la crédibilité d’un site Internet par sa
          réputation. Certains publient des articles parodiques comme Le Gorafi
          ou Nord Presse. En cas de doute, l’outil Décodex du Monde permet de
          vérifier la fiabilité d’une source d’information.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>Privilégier les sources d’informations reconnues</h2>,
      content: (
        <p>
          Elles se repèrent avec avec des urls telles que .gouv.fr, .org,
          .asso.fr. Les blogs et sites personnels seront à regarder avec plus de
          vigilance.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>Varier les sources d’information</h2>,
      content: (
        <p>
          En consultant d’autres articles sur le même sujet, on peut comparer et
          croiser les données. Si une même information est évoquée à plusieurs
          endroits, en citant les mêmes sources, il est plus probable qu’elle
          soit vraie.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>Décrypter les images</h2>,
      content: (
        <p>
          Trouver la source d’une image pour la contextualiser, être attentif à
          sa construction, ou encore utiliser des moteurs de recherche d’images
          inversées comme Google images ou Tineye.com, pour vérifier qu’une
          image n’est pas détournée.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>Sur le web et les réseaux sociaux</h2>,
      content: (
        <p>
          Sur Internet et les réseaux sociaux, tout le monde peut créer et
          diffuser des informations. Il est donc essentiel d’adopter une posture
          d’enquêteur pour vérifier la fiabilité de l’information. En cas de
          doute, on évite de liker et partager pour ne pas donner plus de
          visibilité aux fake news.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>titre7</h2>,
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui.
        </p>
      ),
      picture: photo,
    },
    {
      title: <h2>titre8</h2>,
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo quis
          molestiae quaerat sit voluptates officia. Voluptate eos natus
          voluptatum repellat qui corporis explicabo sapiente soluta veniam est,
          nulla iusto dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident, aliquid facere! Magnam consectetur aspernatur error
          laudantium vero maxime maiorefugiat, reiciendis iusto itaque ad eius
          sequi ducimus autem quo qui.
        </p>
      ),
      picture: photo,
    },
  ];
  const randomcontent = [
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
    Math.random(0, 7),
  ];
  // const randomcontent = [random(0, 7)];
  // let valide = 0;
  // function insertArray() {
  // let  insert = random(0, 7);
  //   randomcontent.map((value) => {
  //     value === insert ? (valide = 1) : (valide = 0);
  //   });
  //   valide === 0 ? randomcontent.push(insert) : content.length;
  //   randomcontent.length > content.length ? insertArray() : content.length;
  //   console.log( randomcontent().length, ">", content.length, "tableau",  randomcontent())
  //   return randomcontent;
  // }
  // insertArray();
  // console.log(insertArray().length, ">", content.length, "tableau", insertArray())
  const contenttitleone = content[randomcontent[0]].title;
  const contenttitletwo = content[randomcontent[1]].title;
  const contenttitletree = content[randomcontent[2]].title;
  const contenttitlefor = content[randomcontent[3]].title;
  const contenttitlefive = content[randomcontent[4]].title;
  const contenttitlesix = content[randomcontent[5]].title;
  const contenttitleseven = content[randomcontent[6]].title;
  const contenttitleeight = content[randomcontent[7]].title;
  const contentone = content[randomcontent[0]].content;
  const contenttwo = content[randomcontent[1]].content;
  const contenttree = content[randomcontent[2]].content;
  const contentfor = content[randomcontent[3]].content;
  const contentfive = content[randomcontent[4]].content;
  const contentsix = content[randomcontent[5]].content;
  const contentseven = content[randomcontent[6]].content;
  const contenteight = content[randomcontent[7]].content;
  const contentimagetree = content[randomcontent[2]].picture;
  const contentimagefor = content[randomcontent[3]].picture;
  const contentimagefive = content[randomcontent[4]].picture;
  const contentimagesix = content[randomcontent[5]].picture;
  const contentimageseven = content[randomcontent[6]].picture;
  return (
    <div className="contener">
      <div className="one">
        {contenttitleone}
        {contentone}
      </div>
      <h1 className="title">FAKESCHOOL</h1>
      <div className="two">
        {contenttitletwo}
        {contenttwo}
      </div>
      <div className="tree">
        <img src={contentimagetree} alt="" />
        {contenttitletree}
        {contenttree}
      </div>
      <div className="for">
        <img src={contentimagefor} alt="" />
        {contenttitlefor}
        {contentfor}
      </div>
      <div className="five">
        <img src={contentimagefive} alt="" />
        {contenttitlefive}
        {contentfive}
      </div>
      <div className="six">
        <img src={contentimagesix} alt="" />
        {contenttitlesix}
        {contentsix}
      </div>
      <div className="seven">
        <img src={contentimageseven} alt="" />
        {contenttitleseven}
        {contentseven}
      </div>
      <div className="eight">
        {contenttitleeight}
        {contenteight}
      </div>
    </div>
  );
}
export default FakeSchool;
