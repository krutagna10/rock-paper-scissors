import Header from './components/Header/Header'
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import './App.css';

import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    const gameFinishHandler = (result) => {
        if (result === 'win') {
            setScore(prevState => prevState + 1);
        } else if (result === 'lose') {
            setScore(prevState => prevState - 1);
        }
    }

    const hideOverlayHandler = () => {
        setShowOverlay(false);
    }

    const showOverlayHandler = () => {
        setShowOverlay(true);
    }

    return (
        <div className='app'>
            <Header
                score={score}
            />
            <Game
                onGameFinish={gameFinishHandler}
            />
            <Rules
                onOpen={showOverlayHandler}
                onClose={hideOverlayHandler}
            />
            {showOverlay && (
                <div className='overlay'></div>
            )}
        </div>
    );
}

export default App;
