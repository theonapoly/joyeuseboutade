import React, { useState } from "react";
import PlayerInput from "./PlayerInput/PlayerInput";

function Duel() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const catygory = ["global", "dev", "blondes"];

  return (
    <div className="Duel">
      <form>
        <fieldset>
          <div className="duelTitr">
            <h1>Choisit ton thème</h1>
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
      <h3>
         Jeu de non-rire : Un joueur pose une question drôle, l'autre tente de
        rester sérieux. Rire coûte un point. Celui avec le plus de points gagne
        à la fin.
      </h3>

      <br />
      <br />
      <PlayerInput selectedTheme={selectedTheme} />
    </div>
  );
}

export default Duel;
