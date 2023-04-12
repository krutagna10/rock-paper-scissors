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
