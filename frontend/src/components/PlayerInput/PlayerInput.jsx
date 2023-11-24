/*eslint-disable*/
import React, { useEffect, useState } from "react";
import "./PlayerInput.scss";
import DuelPiayers from "../DuelPiayers/DuelPiayers";
import un from "../../assets/svg/un.svg";
import deux from "../../assets/svg/deux.svg";
import trois from "../../assets/svg/trois.svg";
import quatre from "../../assets/svg/quatre.svg";
import cinq from "../../assets/svg/cinq.svg";
import six from "../../assets/svg/six.svg";
import sept from "../../assets/svg/sept.svg";
import huit from "../../assets/svg/huit.svg";
import neuf from "../../assets/svg/neuf.svg";
import dix from "../../assets/svg/dix.svg";

function PlayerInput({ selectedTheme }) {
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
  const [lancez, setLancez] = useState(false);

  const handleChange = (e) => {
    if (player.length === 10) {
      setValeur("");
      alert("maximum 10 jours");
    }
    if (e.key === "Enter" && player.length < 10) {
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
      const playerImg = {
        name: player[i],
        svg: svg[i].svg,
        id: svg[i].id,
        live: 3,
      };
      setPlayerMap([...playerMap, playerImg]);
    }
  }, [player]);

  const handleClick = () => {
    if (!selectedTheme) {
      alert("Choisir le thème");
    }
    if (playerMap.length < 2) {
      alert("minimum deux joueurs");
    }
    if (selectedTheme && playerMap.length > 1) {
      setLancez(true);
    }
  };

  return (
    <div>
      <input
        className="pseudo"
        value={player.length !== 10 ? valeur : ""}
        type="text"
        placeholder="Enter votre pseudo"
        onKeyDown={handleChange}
        onChange={(e) => setValeur(e.target.value)}
      />
      <ul className="pseudo-map">
        {playerMap &&
          playerMap.map((elem) => (
            <li key={elem.id}>
              <img src={elem.svg} alt="" height="50px" />
              <h1>{elem.name}</h1>
            </li>
          ))}
      </ul>

      <button className="lancez" type="button" onClick={handleClick}>
        Lancez !
      </button>
      {lancez && (
        <DuelPiayers selectedTheme={selectedTheme} playerMap={playerMap} />
      )}
    </div>
  );
}

export default PlayerInput;
