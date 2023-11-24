// import { useState } from "react";
// import JokeTeam from "./PlayTeam/TeamJoke";
// import TeamMember from "./PlayTeam/TeamPlayer";
// import "./CreatTeam.scss";

// function Team() {
//   const [classe, setClasse] = useState("Start");
//   const handleClickClasseQ = () => {
//     setClasse("End");
//   };
//   const handleClickClasseR = () => {
//     setClasse("Start");
//   };
//   const [playerPoint, setPlayerPoint] = useState(0);

//   const handleClickLessPoint = () => {
//     setPlayerPoint(playerPoint + 1);
//   };

//   const handleClickMorePoint = () => {
//     setPlayerPoint(playerPoint - 1);
//   };
//   return (
//     <div className={classe}>
//       <div className="Question">
//         <JokeTeam
//           handleClickLessPoint={handleClickLessPoint}
//           handleClickMorePoint={handleClickMorePoint}
//           handleClickClasseR={handleClickClasseR}
//         />
//       </div>
//       <div className="Reponse">
//         <TeamMember
//           playerPoint={playerPoint}
//           handleCliqueClasseQ={handleClickClasseQ}
//         />
//       </div>
//     </div>
//   );
// }
// export default Team;
