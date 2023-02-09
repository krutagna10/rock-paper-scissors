import Header from './components/Header/Header'
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import './App.css';

import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    // Score Handler for incrementing and decrementing scores
    const scoreHandler = (result) => {
        if (result === 'win') {
            setScore(prevState => prevState + 1);
        } else if (result === 'lose') {
            setScore(prevState => prevState - 1);
        }
    };

    // Function for showing overlay
    const showOverlayHandler = () => {
        setShowOverlay(true);
    }

    // Function for Hiding Overlay
    const hideOverlayHandler = () => {
        setShowOverlay(false);
    }
    return (
        <div className='app'>
            <Header
                score={score}
            />
            <Game
                onGameFinish={scoreHandler}
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
