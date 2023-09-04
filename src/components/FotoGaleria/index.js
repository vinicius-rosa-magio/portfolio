import "./galeria.css";
import FotoItem from "../FotoItem";

function FotoGaleria() {
    const images = [
        require("../../assets/FotosCasamento/0.jpg"),
        require("../../assets/FotosCasamento/1.jpg"),
        require("../../assets/FotosCasamento/2.jpg"),
        require("../../assets/FotosCasamento/3.jpg"),
        require("../../assets/FotosCasamento/4.jpg"),
        require("../../assets/FotosCasamento/5.jpg"),
        require("../../assets/FotosCasamento/6.jpg"),
        require("../../assets/FotosCasamento/7.jpg"),
        require("../../assets/FotosCasamento/8.jpg"),


        require("../../assets/FotosCasamento/9.jpg"),
        require("../../assets/FotosCasamento/10.jpg"),
        require("../../assets/FotosCasamento/11.jpg"),
        require("../../assets/FotosCasamento/12.jpg"),
        require("../../assets/FotosCasamento/13.jpg"),
        require("../../assets/FotosCasamento/14.jpg"),
        require("../../assets/FotosCasamento/15.jpg"),
        require("../../assets/FotosCasamento/16.jpg"),
        require("../../assets/FotosCasamento/17.jpg"),


        require("../../assets/FotosCasamento/21.jpg"),
        require("../../assets/FotosCasamento/22.jpg"),
        require("../../assets/FotosCasamento/23.jpg"),
        require("../../assets/FotosCasamento/24.jpg"),
        require("../../assets/FotosCasamento/25.jpg"),
        require("../../assets/FotosCasamento/26.jpg"),
        require("../../assets/FotosCasamento/27.jpg"),
        require("../../assets/FotosCasamento/31.jpg"),
        require("../../assets/FotosCasamento/32.jpg"),
        require("../../assets/FotosCasamento/33.jpg"),

        // imagens em pé
        require("../../assets/FotosCasamento/34.jpg"),
        require("../../assets/FotosCasamento/29.jpg"),
        require("../../assets/FotosCasamento/30.jpg"),
        require("../../assets/FotosCasamento/28.jpg"),
        require("../../assets/FotosCasamento/35.jpg"),
        require("../../assets/FotosCasamento/36.jpg"),
        require("../../assets/FotosCasamento/38.jpg"),
        require("../../assets/FotosCasamento/39.jpg"),
        require("../../assets/FotosCasamento/40.jpg"),
        require("../../assets/FotosCasamento/41.jpg"),
        require("../../assets/FotosCasamento/44.jpg"),
        require("../../assets/FotosCasamento/45.jpg"),
        //----------------------------------------------

        require("../../assets/FotosCasamento/46.jpg"),
        require("../../assets/FotosCasamento/43.jpg"),
        require("../../assets/FotosCasamento/42.jpg"),
        require("../../assets/FotosCasamento/37.jpg"),

        require("../../assets/FotosCasamento/47.jpg"),
        require("../../assets/FotosCasamento/48.jpg"),
        require("../../assets/FotosCasamento/49.jpg"),
        require("../../assets/FotosCasamento/50.jpg"),
        require("../../assets/FotosCasamento/51.jpg"),
        require("../../assets/FotosCasamento/53.jpg"),
    ];

    return (
        <div className="foto-galeria">
            <h1 className="titulo-galeria">Minha Galeria de Fotos</h1>
            <div className="galeria-container">
                {images.map((image, index) => (
                    <FotoItem key={index} imageSrc={image} />
                ))}
            </div>
        </div>
    );
};

export default FotoGaleria;
