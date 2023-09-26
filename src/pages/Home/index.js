import { Link } from "react-router-dom";
import HardSkill from "../../components/HardSkills";
import SoftSkill from "../../components/SoftSkill";
import Projetos from "../../components/Projetos";

import './estilo.css';


function Home() {

    return (
        <div className="sobre">

            <div className="conteudo">
                <p className="paragrafo">
                    "Olá, meu nome é Vinicius Rosa Mágio e sou um entusiasta de desenvolvimento web e
                    mobile com grande interesse em tecnologia e inovação. Após me formar em
                    Arquitetura e Urbanismo, descobri minha verdadeira paixão na área de desenvolvimento e
                    estou atualmente estudando React. Estou em constante aprimoramento das minhas habilidades
                    para oferecer soluções mais completas e inovadoras para projetos desafiadores. Sou uma pessoa
                    motivada e comprometida com meu trabalho, sempre buscando oportunidades de aprendizado e crescimento.
                    Adoro trabalhar em equipe para alcançar os objetivos do projeto e estou pronto para enfrentar novos
                    desafios e me adaptar a diferentes ambientes de trabalho. Se você está procurando um colaborador
                    apaixonado por tecnologia e inovação, entre em contato comigo para conversarmos sobre como posso
                    contribuir para o sucesso da sua empresa."
                    <Link to="/sobre" className="link"> Veja mais...</Link>
                </p>
                <img src={require('../../assets/Eu/Making Of - Espaço By Francine - Etyla Mariely Fotografia (98).jpg')} alt="foto do vinicius" className="imagem" />
            </div>

            <HardSkill />
            <SoftSkill />
            <Projetos />
        </div>


    )
}

export default Home;