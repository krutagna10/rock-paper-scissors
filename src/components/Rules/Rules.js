import './Rules.css';
import rules from '../../assets/image-rules.svg';
import closeIcon from '../../assets/icon-close.svg';
import {useState} from "react";

const Rules = () => {
    const [showRules, setShowRules] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);


    // Function for showing rules and overlay
    const showRulesHandler = () => {
        setShowRules(true);
        setShowOverlay(true);
    }

    // Function for hiding rules and overlay
    const hideRulesHandler = () => {
        setShowRules(false);
        setShowOverlay(false);
    }

    // When the user clicks escape-key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideRulesHandler();
        }
    })

    return (
        <section className="rules-section">
            <div className="rules">
                {showOverlay && (
                    <div className='rules__overlay' onClick={hideRulesHandler}/>
                )}

                {showRules && (
                    <div className="rules__modal grid grid--items-center grid--gap background-white">
                        <h1 className="rules__modal-heading font-size-400 text-dark-grey font-weight-bold">
                            Rules
                        </h1>
                        <img className="rules__modal-image"
                             src={rules}
                             alt=""
                             aria-hidden='true'
                        />
                        <button className="rules__modal-btn" onClick={hideRulesHandler}>
                            <img className='rules__modal-close-icon'
                                 src={closeIcon}
                                 alt=""
                                 aria-hidden='true'
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