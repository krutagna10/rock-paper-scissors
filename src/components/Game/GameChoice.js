import paperIcon from '../../assets/icon-paper.svg';
import scissorsIcon from '../../assets/icon-scissors.svg';
import rockIcon from '../../assets/icon-rock.svg';
import './GameChoice.css';

const GameChoice = (props) => {
    // Function for getting computer choice
    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * 3);
        return options[random];
    }

    // Click Handler when the user clicks on any choice button
    const clickHandler = (event) => {
        const userChoice = event.target.closest('.game__btn').dataset.choice;
        const computerChoice = getComputerChoice();

        // Return user and computer choices to parent(Game)
        props.onChoice(userChoice, computerChoice);
    }

    return (
        <div className="game container grid">
            <button className="game__btn icon-background icon-background--paper" aria-label="paper" data-choice="paper" onClick={clickHandler}>
                <img className="game__icon"
                     src={paperIcon}
                     alt=""
                     aria-hidden="true"
                />
            </button>
            <button className="game__btn icon-background icon-background--scissors" aria-label="scissors" data-choice="scissors" onClick={clickHandler}>
                <img className="game__icon"
                     src={scissorsIcon}
                     alt=""
                     aria-hidden="true"
                />
            </button>
            <button className="game__btn icon-background icon-background--rock" aria-label="rock" data-choice="rock" onClick={clickHandler}>
                <img className="game__icon"
                     src={rockIcon}
                     alt=""
                     aria-hidden="true"
                />
            </button>
        </div>
    )
};

export default GameChoice;