import {Link} from "react-router-dom";
import "./estilo.css";

function Header(){
    return (
        <header className="container">
            <img src={ require('../../assets/Logo/logoc.png') } alt="logo do site" className="logo" /> 
            <div className="menu">
                <Link to="/"> Home </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/contato"> Contato </Link>
            </div>
        </header>
    )
}

export default Header;