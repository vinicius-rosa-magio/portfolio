import React from "react";
import ProjetoItem from "../ProjetoItem/index";

import "./estilo.css";

function Projetos() {  
    const projetosDestaques =[

        {
            nome: "PrimeFlix",
            imgSrc: require("../../assets/Projetos/flix.png"),
            resumo:
                <p>
                    Em resumo, esta aplicação React permite aos usuários visualizar uma lista de filmes em 
                    exibição na página inicial e obter detalhes específicos de cada filme na página de detalhes.
                    Os usuários podem salvar filmes em sua lista pessoal e acessar trailers no YouTube. {" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/Filmes" },
                    { label: "Vercel", url: "https://filmes-five.vercel.app/",}
                ],
        },
        {
            nome: "Portfólio",
            imgSrc: require("../../assets/Projetos/logoc.png"),
            resumo:
                <p>
                    "Em resumo, esta aplicação React oferece aos usuários a oportunidade de explorar
                     os meus projetos de programação, acessar informações de contato, assistir a um 
                     vídeo pessoal onde compartilho um pouco sobre minha trajetória, e ainda conta com 
                     uma aba dedicada para facilitar o contato direto comigo. É uma plataforma completa 
                     que proporciona uma visão abrangente das minhas habilidades, experiência e disponibilidade
                     para colaborações futuras." {" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/portfolio" },
                    { label: "Vercel", url: "https://portfolio-vinicius-rosa-magio.vercel.app/",}
                ],
        },
        
        
        
    ]
    const projetos = [
        {
            nome: "HeyGrupo",
            imgSrc: require("../../assets/Projetos/hey.png"),
            resumo:
                <p>
                    Em resumo, um aplicativo de bate-papo em grupo é uma ferramenta
                    essencial para conectar pessoas que precisam conversar sobre assuntos em
                    comum e compartilhar informações de maneira rápida e prática.{" "}
                    <strong>Competência:</strong> React Native
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/Heygrupos" },
                ],
        },
        {
            nome: "Alura Mais",
            imgSrc: require("../../assets/Projetos/alura.png"),
            resumo:
                <p>
                    Este projeto se destina a promover o serviço Alura Plus,
                    fornecendo informações sobre seus recursos e benefícios. A página utiliza imagens,
                    texto e links para atrair e informar os visitantes sobre o serviço e incentivá-los a se inscreverem.{" "}
                    <strong>Competência:</strong> Html e css
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/aluraplus" },
                    { label: "Vercel", url: "https://aluraplus-psi.vercel.app/" },
                ],
        },
        {
            nome: "Finanças",
            imgSrc: require("../../assets/Projetos/f.png"),
            resumo:
                <p>
                    O aplicativo de finanças é uma ferramenta útil para ajudá-lo a gerenciar seu dinheiro e controlar suas despesas.
                    Com este aplicativo,você pode acompanhar facilmente suas receitas e despesas,
                    criar orçamentos e visualizar relatórios de suas finanças.{" "}
                    <strong>Competência:</strong> React Native
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/Financias1" }
                ],
        },
        {
            nome: "AppDevPost",
            imgSrc: require("../../assets/Projetos/dev.png"),
            resumo:
                <p>
                    O DEVPOST é um aplicativo de postagem é uma plataforma que permite aos usuários criarem e compartilharem conteúdo de Texto,
                    com outros usuários da plataforma. Com este aplicativo, você pode facilmente criar postagens,
                    seguir outros usuários, comentar e interagir com a comunidade.{" "}
                    <strong>Competência:</strong> React Native
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/appDevPost" },
                ],
        },
        {
            nome: "Lista tarefas",
            imgSrc: require("../../assets/Projetos/lista.png"),
            resumo:
                <p>
                    O aplicativo de lista de tarefas é uma ferramenta útil para ajudá-lo a gerenciar suas tarefas administrativas.
                    Com este aplicativo, você pode facilmente criar, organizar e priorizar tarefas,
                    além de acompanhar seu progresso.{" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/listatarefas-reactjs" },
                ],
        },
        {
            nome: "Biscoito da sorte",
            imgSrc: require("../../assets/Projetos/biscoito.png"),
            resumo:
                <p>
                    Este aplicativo simples proporciona aos usuários uma maneira divertida de receber
                    frases motivacionais aleatórias sempre que desejarem, simulando a ideia de "abrir um biscoito
                    da sorte" para obter uma mensagem inspiradora. É uma aplicação leve e interativa para melhorar
                    o ânimo e a motivação.{" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/biscoitodasorte" },
                    { label: "Vercel", url: "https://biscoitodasorte-one.vercel.app/" },
                ],
        },
        {
            nome: "Cronometro",
            imgSrc: require("../../assets/Projetos/cronometro.png"),
            resumo:
                <p>
                    Este aplicativo de cronômetro permite que o usuário inicie e pare a contagem do tempo,
                    além de zerar o contador quando necessário. É uma aplicação simples e interativa para medir
                    intervalos de tempo com precisão de décimos de segundo.{" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/cronometro" },
                    { label: "Vercel", url: "https://cronometro-rouge-ten.vercel.app/" },
                ],
        },
        {
            nome: "Busca cep",
            imgSrc: require("../../assets/Projetos/cep.jpg"),
            resumo:
                <p>
                    O aplicativo exibe dois botões:buscar e limpar.
                    O botão buscar é usado para buscar informações sobre o cep digitado pelo usuário, enquanto o botão limpar é usado para limpar o campo de entrada.
                    Se a busca retornar com sucesso, as informações do cep serão exibidas na tela.
                    Caso contrário, um erro será exibido no console.{" "}
                    <strong>Competência:</strong> React Native
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/Busca-Cep" },
                ],
        },
        {
            nome: "Projeto organo",
            imgSrc: require("../../assets/Projetos/banner.png"),
            resumo:
                <p>
                    Este aplicativo permite que os usuários gerenciem colaboradores em diferentes times,
                    com a capacidade de adicionar novos colaboradores e visualizar a lista de colaboradores em cada time.
                    É uma aplicação de gerenciamento de equipes que utiliza componentes React para criar uma interface
                    interativa e informativa. {" "}
                    <strong>Competência:</strong> ReactJs
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/projeto-Organo" },
                    { label: "Vercel", url: "https://projeto-organo.vercel.app/" },
                ],
        },
        {
            nome: "Projeto Dinamica",
            imgSrc: require("../../assets/Projetos/dinamica.jpg"),
            resumo:
                <p>
                    Este aplicativo permite que os usuários gerenciem colaboradores em diferentes times,
                    com a capacidade de adicionar novos colaboradores e visualizar a lista de colaboradores em cada time.
                    É uma aplicação de gerenciamento de equipes que utiliza componentes React para criar uma interface
                    interativa e informativa. {" "}
                    <strong>Competência:</strong> Html,css e javaScript
                </p>,
            links:
                [
                    { label: "GitHub", url: "https://github.com/vinicius-rosa-magio/dinamica" },
                    { label: "Vercel", url: "https://dinamica.vercel.app/" },
                ],
        },



        // Adicione mais projetos aqui
    ];


    return (
        <div>
            <h1 className="destaque">PROJETOS EM DESTAQUES</h1>
            <div className="cont-projeto">
                {projetosDestaques.map((projeto, index) => (
                    <ProjetoItem key={index} {...projeto} />
                ))}
            </div>
            <h1 className="projeto">Projetos</h1>
            <div className="cont-projeto">
                {projetos.map((projeto, index) => (
                    <ProjetoItem key={index} {...projeto} />
                ))}
            </div>
        </div>
    );
}

export default Projetos;