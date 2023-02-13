import Choice from '../Choice/Choice';
import './Game.css';
import Result from "../Result/Result";
import {useState} from "react";

const Game = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [gameFinished, setGameFinished] = useState(false);
    const [result, setResult] = useState('');
    const [resultText, setResultText] = useState('');

    const checkResult = (choices) => {
        const winConditions = [
            ['rock', 'scissors'],
            ['scissors', 'paper'],
            ['paper', 'rock'],
        ];

        const userWins = winConditions.some(element => element.join('') === choices.join(''));

        if (choices[0] === choices[1]) {
            setResultText('Draw');
            return 'draw';
        } else if (userWins) {
            setResultText('You Win');
            return 'win';
        } else {
            setResultText('You Lose');
            return 'lose';
        }
    }

    const setChoicesHandler = (userChoice, computerChoice) => {
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);

        const gameResult = checkResult([userChoice, computerChoice]);
        setResult(gameResult);
        props.onGameFinish(gameResult);

        setGameFinished(true);
    }

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
                    resultText={resultText}
                    onPlayAgain={playAgainHandler}
                />
            )}
        </section>
    )
}

export default Game;