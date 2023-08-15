import React from "react";
import ProjetoItem from "../ProjetoItem/index";
import "./estilo.css";

function Projetos() {
    const projetos = [
        {
            nome: "HeyGrupo",
            imgSrc: require("../../assets/Projetos/hey.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/seu-usuario/heygrupo" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
            ],
        },
        
        
        // Adicione mais projetos aqui
    ];

    return (
        <div>
            <h1 className="titulo">Projetos</h1>
            <div className="cont-projeto">
                {projetos.map((projeto, index) => (
                    <ProjetoItem key={index} {...projeto} />
                ))}
            </div>
        </div>
    );
}

export default Projetos;