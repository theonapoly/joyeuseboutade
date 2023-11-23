import FichePerso from "./FichePerso";
import Tableau from "./DebutTeste";

function TeamMember() {
  const array = Tableau();
  const Personne = array.map((element, index) => {
    return { ...element, index, point: 0 };
  });
  return (
    <div>
      {Personne.map((element) => {
        return <FichePerso key={element.index} element={element} />;
      })}
    </div>
  );
}
export default TeamMember;
