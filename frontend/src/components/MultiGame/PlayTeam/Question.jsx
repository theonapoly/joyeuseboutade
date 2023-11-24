import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.scss";
import un from "../../../assets/svg/un.svg";
import deux from "../../../assets/svg/deux.svg";
import trois from "../../../assets/svg/trois.svg";
import quatre from "../../../assets/svg/quatre.svg";
import cinq from "../../../assets/svg/cinq.svg";
import six from "../../../assets/svg/six.svg";
import sept from "../../../assets/svg/sept.svg";
import huit from "../../../assets/svg/huit.svg";
import neuf from "../../../assets/svg/neuf.svg";
import dix from "../../../assets/svg/dix.svg";

function Question() {
  const svg = [
    { svg: un, id: 1 },
    { svg: deux, id: 2 },
    { svg: trois, id: 3 },
    { svg: quatre, id: 4 },
    { svg: cinq, id: 5 },
    { svg: six, id: 6 },
    { svg: sept, id: 7 },
    { svg: huit, id: 8 },
    { svg: neuf, id: 9 },
    { svg: dix, id: 10 },
  ];
  const [player, setPlayer] = useState([]);
  const [playerMap, setPlayerMap] = useState([]);
  const [valeur, setValeur] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.key === "Enter") {
      const name = e.target.value;

      if (name.length > 3) {
        setPlayer([...player, name]);
        setValeur("");
      } else {
        // eslint-disable-next-line no-alert
        alert("4 letr minimum");
      }
    }
  };

  useEffect(() => {
    for (let i = 0; i < player.length; i += 1) {
      const playerImg = { name: player[i], svg: svg[i].svg, id: svg[i].id };
      setPlayerMap([...playerMap, playerImg]);
    }
  }, [player]);

  return (
    <div className="GlobalStart">
      <div className="Rules">
        Les règles : Inscris les participants, puis commence le jeu ! Ensuite, à
        tour de rôle, cliquez sur vos pseudos. Une page contenant plusieurs
        blagues s'affichera. Vous pouvez toutes les vérifier, MAIS attention,
        vous ne pouvez en choisir qu'une ! Lisez votre blague préférée et
        essayez de faire rire un maximum de personnes ! Si une personne rit,
        vous gagnez un point, appuyez sur le bouton 'Validé' ! Sinon, vous
        perdez un point et vous devez appuyer sur le bouton 'Échec' !
      </div>
      <input
        value={valeur}
        className="PseudoButton"
        type="text"
        placeholder="Entre ton Pseudo !"
        onKeyDown={handleChange}
        onChange={(e) => setValeur(e.target.value)}
      />
      <ul className="ListeName">
        {playerMap &&
          playerMap.map((elem) => (
            <li key={elem.id} className="LiPerso">
              <img src={elem.svg} alt="" />
              <h1 className="Pseudo">{elem.name}</h1>
            </li>
          ))}
      </ul>
      <button
        className="custom-btn btn-14"
        type="button"
        onClick={() => {
          navigate("/TeamPlayer", { state: { playerMap } });
        }}
      >
        Commence le jeu!
      </button>
    </div>
  );
}

export default Question;
