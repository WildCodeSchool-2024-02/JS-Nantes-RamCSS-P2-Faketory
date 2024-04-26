import "./Banniere.css";

function Banniere() {
  return (
    <>
      <div className="messagedefilant">
        <div data-text="Voici un texte qui doit défiler horizontalement. Il peut etre encore plus long !---">
          <span>
            Voici un texte qui doit défiler horizontalement. Il peut etre encore
            plus long !---
          </span>
        </div>
      </div>

      <div className="messagedefilant">
        <div data-text="texte très court !---">
          <span>texte très court !---</span>
        </div>
      </div>

      <article>
        <h1>Horoscope</h1>
        <div className="bandef">
          <span> Ceci est un message défilant !</span>
        </div>
      </article>
    </>
  );
}

export default Banniere;
