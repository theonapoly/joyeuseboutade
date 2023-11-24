import "./TeamJoke.scss";
import PropTypes from "prop-types";
import Blonde from "./JokeType/Blonde";

import Dev from "./JokeType/Dev";
import Global from "./JokeType/Global";

function JokeTeam({
  handleClickLessPoint,
  handleClickMorePoint,
  handleClickClose,
  playerPoint,
}) {
  return (
    <div className="QuestionTeam">
      <div className="Counter">{playerPoint}</div>
      <div className="TypeQuestion">
        <Blonde />
        <Dev />
        <Global />
        <Global />
      </div>
      <div className="TeamJokeButton">
        <div className="ButtonDiv">
          <button className="Plus" type="button" onClick={handleClickLessPoint}>
            {" "}
            v{" "}
          </button>

          <button
            className="Moins"
            type="button"
            onClick={handleClickMorePoint}
          >
            X
          </button>
        </div>
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
  playerPoint: PropTypes.number.isRequired,
};
export default JokeTeam;
