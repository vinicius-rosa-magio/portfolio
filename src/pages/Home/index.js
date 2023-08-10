import { Link } from "react-router-dom";
import HardSkill from "../HardSkills";
import SkillDesigner from "../SkillsDesigner";
import './estilo.css';


function Home() {

    return (
        <div className="sobre">
            <h1 className="titulo">Sobre mim</h1>
            <div className="conteudo">
                <p className="paragrafo">
                    "Olá, meu nome é Vinicius Rosa Mágio e sou um desenvolvedor web e mobile apaixonado por tecnologia e inovação.
                    Após me formar em Arquitetura e Urbanismo, percebi que minha verdadeira paixão estava na área de desenvolvimento e decidi fazer uma transição de carreira.
                    Com habilidades técnicas sólidas em HTML5, CSS3, JavaScript, React Native, jQuery e Bootstrap, sou capaz de atender às demandas do mercado de desenvolvimento web e mobile.
                    Além disso, estou sempre aprimorando minhas habilidades e atualmente estou estudando REACT e UI DESIGN para oferecer soluções mais completas e inovadoras para projetos desafiadores.Sou uma pessoa motivada e comprometida com meu trabalho.
                    Sempre em busca de aprendizado e crescimento, adoro trabalhar em equipe para alcançar os objetivos do projeto. Estou pronto para enfrentar novos desafios e me adaptar a diferentes ambientes de trabalho.
                    Se você está procurando um desenvolvedor web e mobile comprometido e apaixonado por tecnologia e inovação, entre em contato comigo para conversarmos sobre como posso ajudar sua empresa a atingir seus objetivos."
                    <Link to="/sobre" className="link"> Veja mais...</Link>
                </p>
                <img src={require('../../assets/Eu/Making Of - Espaço By Francine - Etyla Mariely Fotografia (98).jpg')} alt="foto do vinicius" className="imagem" />
            </div>

            <HardSkill />
            <SkillDesigner />
        </div>


    )
}

export default Home;