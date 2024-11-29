import React from "react";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => (
  <>
  <div className="bicicletas-container">
    <div>
      <h1 className="section-title">Acerca de Nosotras</h1>
      <p className="section-description">
        Promover el ciclismo como una alternativa práctica y sostenible para la movilidad de cada ciudad.
      </p>
      <div className="cards-container">
        <div className="card">
          <h2 className="card-title">Nuestra Visión</h2>
          <p className="card-content">
            Impulsar el uso de la bicicleta como una opción accesible y sostenible para la movilidad diaria en cada ciudad.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Nuestra Misión</h2>
          <p className="card-content">
            Inspirar a las personas a descubrir la libertad y la diversión de moverse en bicicleta, proporcionando visibilidad de bicicletas libres.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Nuestros Valores</h2>
          <p className="card-content">
            Compromiso, sostenibilidad, y pasión por transformar cada ciudad a través del ciclismo.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
);

export default About;

