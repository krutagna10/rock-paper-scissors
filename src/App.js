// import Header from "../../../rock-paper-scissors/src/components/Header/Header";
// import Game from "../../../rock-paper-scissors/src/components/Game/Game";
// import Rules from "../../../rock-paper-scissors/src/components/Rules/Rules";

import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Rules from "./components/Rules/Rules";

import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  // Score Handler for incrementing and decrementing scores
  const scoreHandler = (amount) => {
    setScore((score) => score + amount);
  };

  return (
    <div className="app">
      <Header score={score} />
      <Game scoreHandler={scoreHandler} />
      <Rules />
    </div>
  );
}

export default App;
