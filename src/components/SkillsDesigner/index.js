import React from "react";
import './estilo.css';

const SkillDesigner = () => {
    return (
        <div className="hard">
            <h1 className="tituloDesigner">Hard skills designer</h1>

            <ul className="imagens-designer">
                <li className="designer-item">
                    <img src={require("../../assets/HardSkill/xd.png" )}alt="imagem do addobe xd" />
                    <img src={require("../../assets/HardSkill/figma.png")} alt="imagem do figma" />
                  
                </li>
            </ul>
        </div>
    )
}

export default SkillDesigner;