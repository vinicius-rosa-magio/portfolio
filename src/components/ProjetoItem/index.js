import React, { useState } from "react";
import "./estilo.css";

function Projeto({ imgSrc, nome, resumo, links, Competência }) {
    const [mostrarCaixa, setMostrarCaixa] = useState(false);

    const alternarCaixa = () => {
        setMostrarCaixa(!mostrarCaixa);
    }

    const fecharCaixa = (e) => {
        if (!e.target.closest(".opcoes-caixa")) {
            setMostrarCaixa(false);
        }
    }

    return (
        <div className="projeto-item">
            <img src={imgSrc} alt={`logo ${nome}`} className="img" />
            <h3>App: {nome}</h3>

            <div className="projeto-info">
                <h4>Resumo:</h4>
                <p>{resumo}</p>
                <div className="projeto-botoes">
                    <button onClick={alternarCaixa} className="btnProjeto">Ver Projeto</button>

                    {mostrarCaixa && ( // se mostra caixa for true renderiza isso 
                        <div onClick={fecharCaixa}>
                            <div className="opcoes-caixa">
                                <div className="opcoes-content">
                                    <h3>Ir para:</h3>
                                    {links.map((link, index) => (
                                        <a target="blank" key={index} href={link.url}>{link.label}</a>
                                    ))}
                                </div>
                                <button onClick={alternarCaixa} className="btn-fechar">Fechar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projeto;