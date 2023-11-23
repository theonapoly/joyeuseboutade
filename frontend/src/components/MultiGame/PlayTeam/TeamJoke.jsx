import "./TeamJoke.scss";
import PropTypes from "prop-types";

function JokeTeam({
  handleClickLessPoint,
  handleClickMorePoint,
  handleClickClose,
}) {
  return (
    <div className="QuestionTeam">
      <div className="TypeQuestion">
        <div>Blonde</div>
        <div>Limite</div>
        <div>Dark</div>
        <div>global</div>
      </div>
      <div>
        <button className="Plus" type="button" onClick={handleClickLessPoint}>
          {" "}
          v{" "}
        </button>

        <button className="Moins" type="button" onClick={handleClickMorePoint}>
          X
        </button>
        <button className="GO" type="button" onClick={handleClickClose}>
          Suivant
        </button>
      </div>
    </div>
  );
}
JokeTeam.propTypes = {
  handleClickLessPoint: PropTypes.number.isRequired,
  handleClickMorePoint: PropTypes.number.isRequired,
  handleClickClose: PropTypes.bool.isRequired,
};
export default JokeTeam;
