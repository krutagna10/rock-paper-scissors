import logo from '../../assets/logo.svg';
import './Header.css';

const Header = (props) => {
    return (
        <section className='header-section'>
            <header className="header container flex flex--justify-space-between flex--align-center">
                <div className="header__logo-wrapper">
                    <img className="header__logo"
                         src={logo}
                         alt="Rock Paper Scissors"
                    />
                </div>
                <div className="header__score-wrapper grid grid--items-center background-white">
                    <p className="header__score-label font-size-100 text-dark-blue">Score</p>
                    <p className="header__score font-size-600 text-dark-grey font-weight-bold">{props.score}</p>
                </div>
            </header>
        </section>
    )
}

export default Header;