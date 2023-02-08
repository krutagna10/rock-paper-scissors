import paperIcon from '../../assets/icon-paper.svg';
import scissorsIcon from '../../assets/icon-scissors.svg';
import rockIcon from '../../assets/icon-rock.svg';
import './GameResult.css';


const GameResult = () => {
    const icons = {
        paper: paperIcon,
        scissors: scissorsIcon,
        rock: rockIcon,
    }

    const winConditions = [
        ['rock', 'scissors'],
        ['scissors', 'paper'],
        ['paper', 'rock'],
    ]


    const checkForWin = (choices) => {
        return winConditions.some(element => element.join('') === choices.join(''));
    }


    return (
        <div className='result container grid'>
            <div className="result__user grid grid--gap">
                <div className="result__icon-wrapper result__icon-wrapper--paper">
                    <img className="result__icon--user"
                         src={icons.paper}
                         alt="user choice"
                    />
                </div>
                <p className="result__label font-size-200 letter-spacing-2">You Picked</p>
            </div>

            <div className="result__description grid grid--content-center grid--gap">
                <p className="result__text font-size-500 font-weight-bold">You Won</p>
                <button className="result__btn btn btn--white">Play Again</button>
            </div>

            <div className="result__computer grid grid--gap">
                <div className="result__icon-wrapper result__icon-wrapper--rock">
                    <img className="result__icon--computer"
                         src={icons.rock}
                         alt="computer choice"
                    />
                </div>
                <p className="result__label font-size-200 letter-spacing-2">The House Picked</p>
            </div>
        </div>
    )
};

export default GameResult;