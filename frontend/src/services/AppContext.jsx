// // AppContext.js
// import React, { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [isClicked, setIsClicked] = useState({
//     Adrien: false,
//   });

//   const handleClickGame = (profilName) => {
//     setIsClicked((prevState) => ({
//       ...prevState,
//       [profilName]: !prevState[profilName],
//     }));
//   };

//   return (
//     <AppContext.Provider value={{ isClicked, handleClickGame }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };
