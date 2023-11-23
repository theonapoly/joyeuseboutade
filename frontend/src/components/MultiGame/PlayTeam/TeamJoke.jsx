import "./TeamJoke.scss";
import PropTypes from "prop-types";
import Blonde from "./JokeType/Blonde";
import Beauf from "./JokeType/Beauf";
import Dev from "./JokeType/Dev";
import Global from "./JokeType/Global";
import Limite from "./JokeType/Limite";

function JokeTeam({
  handleClickLessPoint,
  handleClickMorePoint,
  handleClickClose,
}) {
  return (
    <div className="QuestionTeam">
      <div className="TypeQuestion">
        <Blonde />
        <Beauf />
        <Dev />
        <Global />
        <Limite />
      </div>
      <div className="TeamJokeButton">
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
