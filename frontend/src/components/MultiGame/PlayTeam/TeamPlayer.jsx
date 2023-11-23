import FichePerso from "./FichePerso";
import Tableau from "./DebutTeste";
import "./TeamPlayer.scss";

function TeamMember() {
  const array = Tableau();

  const Personne = array.map((element, index) => {
    return { ...element, index, point: 0 };
  });
  return (
    <div className="AllGame">
      <div className="TextePlayer">Et c'est partie pour la Rigolade!</div>
      <div className="FichePerso">
        {Personne.map((element) => {
          return <FichePerso key={element.index} element={element} />;
        })}
      </div>
    </div>
  );
}
export default TeamMember;
