/*eslint-disable*/

import "./JokeRandom.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniGame from "../../assets/mini-game.svg";

function JokeRandom() {
  const [jokesData, setJokesData] = useState();

  async function jokeApi() {
    const response = await fetch(
      "https://www.blagues-api.fr/api/type/blondes/random",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
      `,
        },
      }
    );
    const data = await response.json();
    setJokesData(data);
  }

  useEffect(() => {
    jokeApi();
  }, []);

  const [btnData, setBtnData] = useState();

  async function btnJokeApi() {
    const response = await fetch("https://www.blagues-api.fr/api/random", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
        `,
      },
    });
    const data = await response.json();
    setBtnData(data);
  }

  const handleClickBtn = () => {
    btnJokeApi();
  };

  console.log(btnData);

  return (
    <div className="main-jokerandom">
      <div className="section-jokerandom">
        <img src={MiniGame} alt="mini-jeux" />
        <div className="mini-game-jokerandom">
          <h1>Mini-jeux</h1>
          <Link to="/">
            <div className="duel-mini-game">Le duel</div>
          </Link>
          <Link to="/">
            <div className="teamjoke-mini-game">Blagues en équipe</div>
          </Link>
        </div>
        <div className="question-jokerandom">
          {btnData ? (
            <p>{btnData && btnData.joke}</p>
          ) : (
            <p>{jokesData && jokesData.joke}</p>
          )}
        </div>
        <div className="answer-jokerandom">
          {btnData ? (
            <p>{btnData && btnData.answer}</p>
          ) : (
            <p>{jokesData && jokesData.answer}</p>
          )}
        </div>
        <div className="btn-container">
          <button
            className="custom-btn btn-jokerandom "
            type="button"
            onClick={handleClickBtn}
          >
            Une autre
          </button>
        </div>
      </div>
    </div>
  );
}

export default JokeRandom;
