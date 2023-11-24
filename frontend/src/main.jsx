/*eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Duel from "./components/Duel";
import TeamMember from "./components/MultiGame/PlayTeam/TeamPlayer";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",

        element: <HomePage />,
      },
      {
        path: "/TeamMember",

        element: <TeamMember />,
      },
      {
        path: "/Duel",

        element: <Duel />,
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
