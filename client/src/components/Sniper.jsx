/* eslint-disable react/prop-types */
import "./sniper.css";

function Sniper({ choice, handleClick }) {

  return choice &&  (
    <figure className="card-news">
      <div className="card-news-img">
        <img src={choice.img} alt={choice.title} className="img-fluid" />
      </div>
      <figcaption>
        {choice.title}
      </figcaption>
      {/* Les boutons */}
      <div className="container-buttons d-md-flex justify-content-md-between">
        <button type="button" id="btn_false" onClick={() => handleClick(false)} className="btn-rond">
          <span
            className="icon-uncheck"
            aria-label="Indiquer que l'actualité est fausse"
          />
        </button>
        <button type="button" id="btn_true" onClick={() => handleClick(true)} className="btn-rond">
          <span
            className="icon-check"
            aria-label="Indiquer que l'actualité est vraie"
          />
        </button>
      </div>
    </figure>
  );
}

export default Sniper;
