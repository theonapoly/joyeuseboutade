import { useState } from "react";
import PropTypes from "prop-types";
import JokeTeam from "./TeamJoke";

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
      <button type="button" onClick={handleClickOpen}>
        {element.name}
      </button>
      <div>{playerPoint}</div>
      {isOpen ? (
        <JokeTeam
          handleClickLessPoint={handleClickLessPoint}
          handleClickMorePoint={handleClickMorePoint}
          handleClickClose={handleClickClose}
        />
      ) : (
        ""
      )}
    </div>
  );
}
FichePerso.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  }).isRequired,
};
export default FichePerso;
