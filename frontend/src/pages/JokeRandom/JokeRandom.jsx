/*eslint-disable*/

import "./JokeRandom.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiceGame from "../../assets/game.svg";

function JokeRandom() {
  const [jokesData, setJokesData] = useState();

  async function jokeApi() {
    const response = await fetch(
      "https://www.blagues-api.fr/api/random?disallow=dark&disallow=limit&disallow=beauf",
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
    const response = await fetch(
      "https://www.blagues-api.fr/api/random?disallow=dark&disallow=limit&disallow=beauf",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
        `,
        },
      }
    );
    const data = await response.json();
    setBtnData(data);
  }

  const handleClickBtn = () => {
    btnJokeApi();
  };

  console.log(btnData);

  // -------------- ISCLICKED --------------

  const [buttonState, setButtonState] = useState(false);
  console.log(buttonState);

  const handleClickButton = () => {
    setButtonState((prevState) => !prevState);
  };

  return (
    <div className="main-jokerandom">
      <div className="section-jokerandom">
        <button className="btn-logo-container" to="/">
          <img
            className="btn-logo-img"
            src={DiceGame}
            alt="logo-mini-jeux"
            onClick={handleClickButton}
          />
        </button>
        {/* --------- */}

        <div
          className={`mini-game-jokerandom ${
            buttonState ? "displayOn" : "displayOff"
          }`}
        >
          <h1>. Mini-jeux .</h1>
          <Link className="duel-mini-game" to="/Duel">
            <p>Le duel</p>
          </Link>
          <Link className="teamjoke-mini-game" to="/TeamMember">
            <p>Blagues en équipe</p>
          </Link>
        </div>

        {/* --------- */}
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
            Une autre !
          </button>
        </div>
      </div>
    </div>
  );
}

export default JokeRandom;
