function Sniper() {
  return (
    <figure className="card">
      <img src="../../public/images/gabriel-attal.jpg" alt="gabriel-attal" />
      <figcaption>
        Gabriel Attal se réveille en sursaut, persuadé qu’un chômeur se cache
        sous son lit
      </figcaption>
      <div className="container">
        <button type="button" id="btn_false" className="btn-rond">
          <span
            className="icon-uncheck"
            aria-label="Indiquer que l'actualité est fausse"
          />
        </button>
        <button type="button" id="btn_true" className="btn-rond">
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
