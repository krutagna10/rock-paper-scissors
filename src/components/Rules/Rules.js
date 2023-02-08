import './Rules.css';
import rules from '../../assets/image-rules.svg';
import closeIcon from '../../assets/icon-close.svg';
import {useState} from "react";

const Rules = (props) => {
    const [showRules, setShowRules] = useState(false);

    const showRulesHandler = () => {
        setShowRules(true);
        props.onOpen();
    }

    const hideRulesHandler = () => {
        setShowRules(false);
        props.onClose();
    }

    return (
        <section className="rules-section">
            <div className="rules">
                {showRules && (
                    <div className="rules__modal background-white">
                        <h1 className="rules__modal-heading font-size-400 text-dark-grey font-weight-bold">
                            Rules
                        </h1>
                        <img className="rules__modal-image"
                             src={rules}
                             alt="Game rules"
                        />
                        <button className="rules__modal-btn" onClick={hideRulesHandler}>
                            <img src={closeIcon}
                                 alt=""
                            />
                        </button>
                    </div>
                )}
                <button className="rules__btn btn btn--dark" onClick={showRulesHandler}>Rules</button>
            </div>
        </section>
    )
}

export default Rules;