import React from "react";
import "./album.css"; 

const FotoItem = ({ imageSrc }) => {
  return (
    <div className="foto-item">
      <img src={imageSrc} alt="Foto" className="img-album" />
    </div>
  );
};

export default FotoItem;
