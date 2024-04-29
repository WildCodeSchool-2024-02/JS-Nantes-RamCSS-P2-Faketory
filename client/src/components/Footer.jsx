import "./Footer.css";

function Footer() {
  return (
    <article className="footer">
      <div className="container-fluid">
        <div className="row">
          <ul className="contact-col-md-4">
            <li> Contact </li>
            <li> Annonceur </li>
            <li> CGU </li>
            <li> Charte sur les données personnelles </li>
            <li> Politique cookies </li>
            <li> Gestion des cookies </li>
          </ul>
          <ul className="navigation-col-md-4">
            <li> NAVIGATION </li>
            <li> Home </li>
            <li> Best Of </li>
            <li> Créer sa Fake News </li>
            <li> Fake School </li>
            <li> Connexion </li>
          </ul>

          <div className="logo col-md-4">
            {/* <button className="icon-return" /> */}
            <img src="./images/logo-faketory.svg" alt="logo faketory" />
            <p>
              Copyright © - 2024 - Tous droits réservés. Politique de
              confidentialité - Mentions légales.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Footer;
