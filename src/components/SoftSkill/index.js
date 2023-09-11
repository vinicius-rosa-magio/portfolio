import React from "react";
import './softEstilo.css';

const SoftSkill = () => {
    const softSkills = [
        "Focado",
        "Empatia",
        "Atitude positiva",
        "Autoconfiança",
        "Organizado",
        "Detalhista",
        "Determinado",
        "Resiliência",
        "Trabalho em equipe"
    ];

    return (
        <div className="soft">
            <h1 className="tituloHard">Soft Skills</h1>

            <div className="coluna-soft">
                <ul className="lista-soft">
                    {softSkills.slice(0, 3).map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="coluna-soft">
                <ul className="lista-soft">
                    {softSkills.slice(3, 6).map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="coluna-soft">
                <ul className="lista-soft">
                    {softSkills.slice(6).map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SoftSkill;
