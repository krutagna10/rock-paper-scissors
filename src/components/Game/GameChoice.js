import paperIcon from '../../assets/icon-paper.svg';
import scissorsIcon from '../../assets/icon-scissors.svg';
import rockIcon from '../../assets/icon-rock.svg';
import './GameChoice.css';

const GameChoice = (props) => {
    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * 3);
        return options[random];
    }

    const clickHandler = (event) => {
        const userChoice = event.target.dataset.choice;
        const computerChoice = getComputerChoice();
        props.onChoice(userChoice, computerChoice);
    }

    return (
        <div className="game container grid">
            <button className="game__btn game__btn--paper" aria-label="paper" data-choice="paper" onClick={clickHandler}>
                <img className="game__icon"
                     src={paperIcon}
                     alt=""
                     aria-hidden="true"
                     data-choice='paper'
                />
            </button>
            <button className="game__btn game__btn--scissors" aria-label="scissors" data-choice="scissors" onClick={clickHandler}>
                <img className="game__icon"
                     src={scissorsIcon}
                     alt=""
                     aria-hidden="true"
                     data-choice='scissors'
                />
            </button>
            <button className="game__btn game__btn--rock" aria-label="rock" data-choice="rock" onClick={clickHandler}>
                <img className="game__icon"
                     src={rockIcon}
                     alt=""
                     aria-hidden="true"
                     data-choice='rock'
                />
            </button>
        </div>
    )
};

export default GameChoice;