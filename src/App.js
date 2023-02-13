import Header from './components/Header/Header'
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';

import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);

    // Score Handler for incrementing and decrementing scores
    const scoreHandler = (result) => {
        if (result === 'win') {
            setScore(prevState => prevState + 1);
        } else if (result === 'lose') {
            setScore(prevState => prevState - 1);
        }
    };

    return (
        <div className='app'>
            <Header score={score} />
            <Game onGameFinish={scoreHandler} />
            <Rules/>
        </div>
    );
}

export default App;
