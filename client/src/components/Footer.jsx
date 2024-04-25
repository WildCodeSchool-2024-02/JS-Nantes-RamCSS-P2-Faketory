import "./Footer.css";

function Footer() {
  return (
    <article>
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
          <li> Home </li>
          <li> Best Of </li>
          <li> Créer sa Fake News </li>
          <li> Fake School </li>
          <li> Connexion </li>
        </ul>

        {/* <button className="icon-return" type="button"/> */}

        <img src="./images/logo-faketory.svg" alt="logo faketory" />

        <p>
          Copyright © - 2024 - Tous droits réservés. Politique de
          confidentialité - Mentions légales.
        </p>
      </div>
    </article>
  );
}

export default Footer;
