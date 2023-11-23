/*eslint-disable*/
import { useEffect, useState } from "react";
import "./Jokes.scss";

function Limite() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickProfil = () => {
    setIsClicked(!isClicked);
  };
  const [jokesData, setJokesData] = useState();

  const url = ["https://www.blagues-api.fr/api/type/limit/random"];
  useEffect(() => {
    url.map((el) => {
      async function jokeRandomApi() {
        const response = await fetch(el, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA3MjUxODU2ODk5MTgwNTU3MiIsImxpbWl0IjoxMDAsImtleSI6IkFCVkU3ZFBuY0xQbGVVYXp3VzU3QmZLckFpaHhadG1lM0VXeDg1QmZkN1A2T1l2a1YzIiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMjNUMDk6NDc6NTMrMDA6MDAiLCJpYXQiOjE3MDA3MzI4NzN9.AM6idLmevH6GAGUVLVY6ZYrwODfOySaj28P0en9L4o8
          `,
          },
        });
        const data = await response.json();
        setJokesData(data);
      }
      jokeRandomApi();
    });
  }, []);
  return (
    <div className="JokesBlock">
      <button type="button" className="JokesType" onClick={handleClickProfil}>
        {jokesData && jokesData.type}
      </button>
      <div className={isClicked ? "JokesJoke" : "JokesJokeN"}>
        {jokesData && jokesData.joke}
      </div>

      <div className={isClicked ? "JokesAnswer" : "JokesAnswerN"}>
        {jokesData && jokesData.answer}
      </div>
    </div>
  );
}
export default Limite;
