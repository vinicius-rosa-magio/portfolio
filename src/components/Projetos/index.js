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
                { label: "GitHub",url: "https://github.com/vinicius-rosa-magio/Heygrupos"  },
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
            nome: "Finanças",
            imgSrc: require("../../assets/Projetos/f.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub",  url: "https://github.com/vinicius-rosa-magio/Financias1" }
            ],
        },
        {
            nome: "AppDevPost",
            imgSrc: require("../../assets/Projetos/dev.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/appDevPost" },
            ],
        },
        {
            nome: "Lista tarefas",
            imgSrc: require("../../assets/Projetos/lista.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/listatarefas-reactjs" },
            ],
        },
        {
            nome: "Biscoito da sorte",
            imgSrc: require("../../assets/Projetos/biscoito.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/biscoitodasorte" },
                { label: "Vercel", url: "https://biscoitodasorte-one.vercel.app/" },
            ],
        },
        {
            nome: "Cronometro",
            imgSrc: require("../../assets/Projetos/cronometro.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/cronometro" },
                { label: "Vercel", url: "https://cronometro-rouge-ten.vercel.app/" },
            ],
        },
        {
            nome: "Busca cep",
            imgSrc: require("../../assets/Projetos/cep.jpg"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/Busca-Cep" },
            ],
        },
        {
            nome: "Projeto organo",
            imgSrc: require("../../assets/Projetos/banner.png"),
            resumo: "Em resumo, um aplicativo de bate-papo em grupo...",
            links: [
                { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/projeto-Organo"  },
                { label: "Vercel", url: "https://projeto-organo.vercel.app/" },
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