import GameChoice from './GameChoice';
import './Game.css';
import GameResult from "./GameResult";
import {useState} from "react";

const Game = () => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [gameFinished, setGameFinished] = useState(false);
    const [result, setResult] = useState('');

    const checkResult = (choices) => {
        const winConditions = [
            ['rock', 'scissors'],
            ['scissors', 'paper'],
            ['paper', 'rock'],
        ];

        const userWins = winConditions.some(element => element.join('') === choices.join(''));

        if (choices[0] === choices[1]) {
            return 'draw';
        } else if (userWins) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    const setChoices = (userChoice, computerChoice) => {
        setUserChoice(userChoice);

        setComputerChoice(computerChoice);
        const gameResult = checkResult([userChoice, computerChoice]);
        setResult(gameResult);

        setGameFinished(true);
    }

    const playAgainHandler = () => {
        setGameFinished(false);
    }

    return (
        <section className='game-section grid grid--content-center'>
            {!gameFinished && (
                <GameChoice
                    onChoice={setChoices}
                />
            )}
            {gameFinished && (
                <GameResult
                    userChoice={userChoice}
                    computerChoice={computerChoice}
                    result={result}
                    onPlayAgain={playAgainHandler}
                />
            )}
        </section>
    )
}

export default Game;