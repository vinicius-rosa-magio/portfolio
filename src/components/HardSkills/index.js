import React from "react";
import './estilo.css';

const HardSkill = () => {
    return (
        <div className="hard">
            <h1 className="tituloHard">Hard skills programação</h1>

            <ul className="imagens-lista">
                <li className="imagens-item">
                    <img src={require('../../assets/HardSkill/Jquery.png')} alt="logo Jquery" />
                    <img src={require('../../assets/HardSkill/Html.png')} alt="logo html" />
                    <img src={require('../../assets/HardSkill/css.png')} alt="logo css" />
                    <img src={require('../../assets/HardSkill/JS.png')} alt="logo javaScript" />
                    <img src={require('../../assets/HardSkill/ReactNative.png')} alt="logo React Native" />
                    <img src={require('../../assets/HardSkill/Boss.png')} alt="logo Bootstrap" />
                    <img src={require('../../assets/HardSkill/React.png')} alt="logo ReactJS" />
                </li>
            </ul>
        </div>
    )
}

export default HardSkill;