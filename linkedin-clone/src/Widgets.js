import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoIcon from "@mui/icons-material/Info";
import("./Widgets.css");

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Ici les news", "Plein de news différentes")}
      {newsArticle("Un dev buzz", "Il recrée la page LinkedIn")}
      {newsArticle("Cryptomonnaies", "Explosion du cours du BTC")}
      {newsArticle("Covid19 :", "La fin du monde")}
      {newsArticle("Les singes", "Ont pris le controle")}
    </div>
  );
}

export default Widgets;
