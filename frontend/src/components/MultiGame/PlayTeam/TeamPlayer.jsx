import { useLocation } from "react-router-dom";
import FichePerso from "./FichePerso";

import "./TeamPlayer.scss";

function TeamMember() {
  const location = useLocation();

  const array = location.state.playerMap;

  const Personne = array.map((element, index) => {
    return { ...element, index, point: 0 };
  });

  return (
    <div className="AllGame">
      <div className="TextePlayer">Et c'est parti pour la rigolade</div>
      <div className="FichePerso">
        {Personne.map((element) => {
          return <FichePerso key={element.index} element={element} />;
        })}
      </div>
    </div>
  );
}
export default TeamMember;
