import paperIcon from '../../assets/icon-paper.svg';
import scissorsIcon from '../../assets/icon-scissors.svg';
import rockIcon from '../../assets/icon-rock.svg';
import './GameResult.css';

const icons = {
    paper: paperIcon,
    scissors: scissorsIcon,
    rock: rockIcon,
}

const GameResult = (props) => {
    let resultText;
    if (props.result === 'draw') {
        resultText = 'draw';
    } else if (props.result === 'win') {
        resultText = 'You Win';
    } else {
        resultText = 'You Lose'
    }

    return (
        <div className='result container grid'>
            <div className="result__user grid grid--gap">
                <div className={`result__icon-wrapper result__icon-wrapper--${props.userChoice}`}>
                    <img className="result__icon--user"
                         src={icons[props.userChoice]}
                         alt="user choice"
                    />
                </div>
                <p className="result__label font-size-200 letter-spacing-2">You Picked</p>
            </div>

            <div className="result__description grid grid--content-center grid--gap">
                <p className="result__text font-size-500 font-weight-bold">{resultText}</p>
                <button className="result__btn btn btn--white" onClick={props.onPlayAgain}>Play Again</button>
            </div>

            <div className="result__computer grid grid--gap">
                <div className={`result__icon-wrapper result__icon-wrapper--${props.computerChoice}`}>
                    <img className="result__icon--computer"
                         src={icons[props.computerChoice]}
                         alt="computer choice"
                    />
                </div>
                <p className="result__label font-size-200 letter-spacing-2">The House Picked</p>
            </div>
        </div>
    )
};

export default GameResult;