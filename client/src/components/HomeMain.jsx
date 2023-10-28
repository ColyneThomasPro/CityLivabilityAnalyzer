import React from "react";
import "../styles/HomeMain.css";
import transportIcon from "./../assets/img/avant-du-bus.png";
import infrastructureIcon from "./../assets/img/batiment.png";
import weatherIcon from "./../assets/img/meteo.png";
import statisticsIcon from "./../assets/img/graphique-a-barres.png";
import joblessIcon from "./../assets/img/chomage.png";
import topographyIcon from "./../assets/img/montagnes.png";

function HomeMain() {
  return (
    <body>
      <section id="home-section1">
        <p className="slogan">
          Obtenez plus de renseignements sur la ville qui vous intéresse.
        </p>
        <ul className="wrapper">
          <li className="flex-wrapper-content">
            <div>
              <img src={transportIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">transport</p>
            </div>
          </li>
          <li className="flex-wrapper-content">
            <div>
              <img src={infrastructureIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">hopitaux</p>
            </div>
          </li>
          <li className="flex-wrapper-content">
            <div>
              <img src={weatherIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">météo</p>
            </div>
          </li>
          <li className="flex-wrapper-content">
            <div>
              <img src={statisticsIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">statistiques</p>
            </div>
          </li>
          <li className="flex-wrapper-content">
            <div>
              <img src={joblessIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">taux chômage</p>
            </div>
          </li>
          <li className="flex-wrapper-content">
            <div>
              <img src={topographyIcon} alt="icon" className="home-icons" />
              <p className="wrapper-icon-text">topographie</p>
            </div>
          </li>
        </ul>
        <p className="commercial-text">Notre plateforme vous donne un accès privilégié aux données officielles, que ce soit par simple curiosité ou pour vous aider à prendre des décisions éclairées sur votre prochain déménagement estival. Vous pouvez explorer en détail une multitude d'informations sur la ville de France métropolitaine de votre choix grâce à notre site.</p>
      </section>
      <section id="home-section2">
        <div className="mask-black-filter section2-flex">
          <p className="section2-slogan">Vous souhaitez déménager ? <br/> Autant ne pas avoir de surprise à l'arrivée.</p>
        </div>
      </section>
    </body>
  );
}

export default HomeMain;
