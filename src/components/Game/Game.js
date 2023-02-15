import Choice from '../Choice/Choice';
import './Game.css';
import Result from "../Result/Result";
import {useState} from "react";

const outcome = {
    draw: {text: 'Draw', amount: 0},
    win: {text: 'You Win', amount: 1},
    lose: {text: 'You Lose', amount: -1},
}

const winAgainst = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
}

const Game = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [gameFinished, setGameFinished] = useState(false);
    const [result, setResult] = useState('');

    // Function for checking result
    const checkResult = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'draw';
        } else if (winAgainst[userChoice] === computerChoice) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    const setChoicesHandler = (userChoice, computerChoice) => {
        // Setting user choice
        setUserChoice(userChoice);

        // Setting computer choice
        setComputerChoice(computerChoice);

        // Calculating the Game Result
        const gameResult = checkResult(userChoice, computerChoice);

        // Setting the result to game result
        setResult(gameResult);

        // Passing the amount to scoreHandler function in App.js
        props.scoreHandler(outcome[gameResult].amount);

        // Setting the game finished to true
        setGameFinished(true);
    }

    // Function for Play Again Button
    const playAgainHandler = () => {
        setGameFinished(false);
    }

    return (
        <section className='game-section grid grid--content-center'>
            {!gameFinished && (
                <Choice
                    onChoice={setChoicesHandler}
                />
            )}
            {gameFinished && (
                <Result
                    userChoice={userChoice}
                    computerChoice={computerChoice}
                    result={result}
                    resultText={outcome[result].text}
                    onPlayAgain={playAgainHandler}
                />
            )}
        </section>
    )
}

export default Game;