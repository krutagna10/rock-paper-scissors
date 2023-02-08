import GameChoice from './GameChoice';
import './Game.css';
import GameResult from "./GameResult";
import {useState} from "react";

const Game = () => {

    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');

    const setChoices = (userChoice, computerChoice) => {
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
    }

    console.log(userChoice, computerChoice);

    const [gameFinished, setGameFinised] = useState(false);

    // Checking for win


    return (
        <section className='game-section grid grid--content-center'>
            {!gameFinished && (
                <GameChoice
                    onChoice={setChoices}
                />
            )}
            {gameFinished && (
                <GameResult/>
            )}
        </section>
    )
}

export default Game;