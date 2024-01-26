/*eslint-disable*/
import React, { useEffect, useState } from "react";
import "./DuelPiayers.scss";

function DuelPiayers({ selectedTheme, playerMap }) {
  const [joke, setJoke] = useState([]);
  const [player1, setplayer1] = useState(0);
  const [player2, setplayer2] = useState(1);
  const [motor, setMotor] = useState(0);

  async function jokeApi() {
    if (selectedTheme === "all") {
      const response = await fetch(
        "https://www.blagues-api.fr/api/type/dev/random",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
          `,
          },
        }
      );
      const data = await response.json();
      setJoke(data);
    } else {
      const response = await fetch(
        ` https://www.blagues-api.fr/api/type/${selectedTheme}/random`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
                `,
          },
        }
      );
      const data = await response.json();
      setJoke(data);
    }
  }

  useEffect(() => {
    jokeApi();
  }, [motor]);
  useEffect(() => {
    const length = playerMap.length;
    const chiffre1 = Math.floor(Math.random() * parseInt(length));
    setplayer1(chiffre1);
    for (let i = 0; i < 100; i += 1) {
      const chiffre2 = Math.floor(Math.random() * parseInt(length));
      if (chiffre1 !== chiffre2) {
        setplayer2(chiffre2);
        i = 100;
      }
    }
  }, [motor, playerMap]);
  const handleClick = () => {
    setMotor(motor + 1);

    if (playerMap[player2].live !== 0) {
      playerMap[player2].live -= 1;
    }
  };
  return (
    <div className="DuelPiayers">
      <ul>
        {playerMap.map((elem, index) => (
          <li key={index}>
            {elem.live === 3 && <div className="live3"></div>}
            {elem.live === 2 && (
              <div className="live2">
                <div className="live2-anterieur"></div>
              </div>
            )}
            {elem.live === 1 && (
              <div className="live1">
                <div className="live1-anterieur"></div>
              </div>
            )}
            {elem.live === 0 && <div className="live0"></div>}

            <img src={elem.svg} alt="" height="50px" />
            <h3>{elem.name}</h3>
          </li>
        ))}
      </ul>
      <div className="deux-joueurs">
        <div>
          <h1>Je pose une question</h1>
          <img
            className="deux-joueurs-img"
            src={playerMap[player1].svg}
            alt="svg"
          />
        </div>
        <div>
          <h1>J'essaye de ne pas rire</h1>
          <img
            className="deux-joueurs-img"
            src={playerMap[player2].svg}
            alt="svg"
          />
        </div>
      </div>
      <br />
      <br />
      <h1>{joke.joke}</h1>

      <br />
      <h1>{joke.answer}</h1>
      <div className="buton">
        <button
          className="plus"
          type="button"
          onClick={() => setMotor(motor + 1)}
        >
          v
        </button>
        <button className="moins" type="button" onClick={handleClick}>
          x
        </button>
      </div>
    </div>
  );
}

export default DuelPiayers;
