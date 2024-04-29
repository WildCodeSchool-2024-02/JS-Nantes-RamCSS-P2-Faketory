import PropTypes from "prop-types";

function SelectNewsCard({ newItem, change }) {
  return (
    newItem && (
      <article>
        <img src={newItem.img} alt="" />
        <h2>
          {newItem.name}
          {newItem.title}
        </h2>
        <button type="button" onClick={change}>
          Vrai
        </button>
      </article>
    )
  );
}
export default SelectNewsCard;

SelectNewsCard.propTypes = {
  newItem: PropTypes.arrayOf.isRequired,
  change: PropTypes.func.isRequired,
};
