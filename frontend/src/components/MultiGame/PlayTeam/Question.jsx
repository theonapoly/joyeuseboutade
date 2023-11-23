import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <input
        value={valeur}
        type="text"
        placeholder="Enter some text"
        onKeyDown={handleChange}
        onChange={(e) => setValeur(e.target.value)}
      />
      <ul>
        {playerMap &&
          playerMap.map((elem) => (
            <li key={elem.id}>
              <img src={elem.svg} alt="" height="50px" />
              <h1>{elem.name}</h1>
            </li>
          ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          navigate("/TeamPlayer", { state: { playerMap } });
        }}
      >
        frr
      </button>
      {/* <Link to="/TeamPlayer">go</Link> */}
    </div>
  );
}

export default Question;
