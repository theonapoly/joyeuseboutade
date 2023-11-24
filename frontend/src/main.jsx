/*eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

import Question from "./components/MultiGame/PlayTeam/Question";
import TeamPlayer from "./components/MultiGame/PlayTeam/TeamPlayer";

import JokeRandom from "./pages/JokeRandom/JokeRandom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",

        element: <HomePage />,
      },
      {
        path: "/jokerandom",
        element: <JokeRandom />,
      },
      {
        path: "/TeamMember",

        element: <Question />,
      },
      {
        path: "/TeamPlayer",

        element: <TeamPlayer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
