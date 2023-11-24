import { useState } from "react";
import PropTypes from "prop-types";
import JokeTeam from "./TeamJoke";
import "./FichePerso.scss";

function FichePerso({ element }) {
  const [playerPoint, setPlayerPoint] = useState(element.point);

  const handleClickLessPoint = () => {
    setPlayerPoint(playerPoint + 1);
  };

  const handleClickMorePoint = () => {
    setPlayerPoint(playerPoint - 1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClickClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="AllPlayer">
        <img src={element.svg} alt="Logo" />
        <button
          className="custom-btn btn-14"
          type="button"
          onClick={handleClickOpen}
        >
          {element.name}
        </button>
        <div className="PointPlayer">{playerPoint}</div>
        {isOpen ? (
          <JokeTeam
            handleClickLessPoint={handleClickLessPoint}
            handleClickMorePoint={handleClickMorePoint}
            handleClickClose={handleClickClose}
            playerPoint={playerPoint}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
FichePerso.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    svg: PropTypes.string.isRequired,
  }).isRequired,
};
export default FichePerso;
