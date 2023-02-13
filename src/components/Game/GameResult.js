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
    let userIconWrapperClass = `result__icon-wrapper icon-background icon-background--${props.userChoice}`;
    let computerIconWrapperClass = `result__icon-wrapper icon-background icon-background--${props.computerChoice}`;

    if (props.result === 'win') {
        userIconWrapperClass = userIconWrapperClass + ' result__winner';
    } else if (props.result === 'lose') {
        computerIconWrapperClass = computerIconWrapperClass + ' result__winner';
    }

    return (
        <section className='result-section'>
            <div className='result container grid'>
                <div className="result__user grid grid--gap">
                    <div className={userIconWrapperClass}>
                        <img className="result__icon--user"
                             src={icons[props.userChoice]}
                             alt="user choice"
                        />
                    </div>
                    <p className="result__label font-size-200">You Picked</p>
                </div>

                <div className="result__description grid grid--content-center grid--gap">
                    <p className="result__text font-size-500 font-weight-bold">{props.resultText}</p>
                    <button className="result__btn btn btn--white" onClick={props.onPlayAgain}>Play Again</button>
                </div>

                <div className="result__computer grid grid--gap">
                    <div className={computerIconWrapperClass}>
                        <img className="result__icon--computer"
                             src={icons[props.computerChoice]}
                             alt="computer choice"
                        />
                    </div>
                    <p className="result__label font-size-200">The House Picked</p>
                </div>
            </div>
        </section>
    )
};

export default GameResult;