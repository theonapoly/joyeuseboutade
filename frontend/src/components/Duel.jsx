import React, { useState } from "react";
import PlayerInput from "./PlayerInput/PlayerInput";

function Duel() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const catygory = [
    "all",
    "global",
    "dev",
    "dark",
    "limit",
    "beauf",
    "blondes",
  ];

  return (
    <div className="Duel">
      <form>
        <fieldset>
          <div className="duelTitr">
            <h1>choisir le thème</h1>
          </div>

          <div className="categorie">
            {catygory.map((elem) => (
              <div>
                <input
                  type="radio"
                  id={elem}
                  name="contact"
                  value={elem}
                  onChange={(e) => {
                    setSelectedTheme(e.target.value);
                  }}
                />
                <label htmlFor={elem}>{elem}</label>
              </div>
            ))}
          </div>
        </fieldset>
      </form>

      <h1 className="regle">Règle de jeux</h1>

      <br />
      <br />
      <PlayerInput selectedTheme={selectedTheme} />
    </div>
  );
}

export default Duel;
