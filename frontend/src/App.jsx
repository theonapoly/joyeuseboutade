/*eslint-disable*/
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Duel from "./components/Duel";

function App() {
  return (
    <div className="main-container-app">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
