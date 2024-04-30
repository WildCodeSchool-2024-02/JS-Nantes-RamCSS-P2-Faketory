import "./Footer.css";

function Footer() {
  return (
    <article className="footer">
      <div className="container">
        <ul className="contact">
          <li> Contact </li>
          <li> Annonceur </li>
          <li> CGU </li>
          <li> Charte sur les données personnelles </li>
          <li> Politique cookies </li>
          <li> Gestion des cookies </li>
        </ul>
        <ul className="navigation">
          <li> NAVIGATION </li>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/best-of"> Best Of </a>
          </li>
          <li>
            <a href="/create"> Créer sa Fake News </a>
          </li>
          <li>
            <a href="/fakeschool"> Fake School </a>
          </li>
          <li>
            <a href="/connexion"> Connexion </a>
          </li>
        </ul>

        <div className="logo">
          {/* <button className="icon-return" /> */}
          <img src="./images/logo-faketory.svg" alt="logo faketory" />
          <p>
            Copyright © - 2024 - Tous droits réservés. Politique de
            confidentialité - Mentions légales.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Footer;
