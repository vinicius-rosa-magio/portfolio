import React from "react";
import './estilo.css';

const HardSkill = () => {
    return (
        <div className="hard">
            <h1 className="tituloHard">Hard Skills </h1>

            <div className="coluna">
                <h2>Frontend:</h2>
                <ul className="lista">
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                </ul>
            </div>

            <div className="coluna">
                <h2>Framework:</h2>
                <ul className="lista">
                    <li>jQuery</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>React Native</li>
                </ul>
            </div>

            <div className="coluna">
                <h2>Controle de versão:</h2>
                <ul className="lista">
                    <li>Git</li>
                </ul>
            </div>

            <div className="coluna">
                <h2>Designer:</h2>
                <ul className="lista">
                    <li>Figma</li>
                    <li>Adobe Xd</li>
                </ul>
            </div>
        </div>
    )
}

export default HardSkill;
