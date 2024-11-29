import React from 'react';
import '../styles/NewSection.css';
import img from '../assets/Anthem.jpg';
import img1 from '../assets/Bici6.jpg';
import img2 from '../assets/Bici7.jpg';

const news = [
  {
    title: 'Recomendaciones para andar en tu bici',
    description: 'Un viaje en bicicleta puede ser mucho más placentero y seguro si sigues algunos consejos clave. Aprende a planificar tus rutas con anticipación, asegurarte de que tu bicicleta esté en perfecto estado antes de salir y mantener una postura cómoda al pedalear.',
    image: img1,
  },
  {
    title: 'Hazte visible por la noche.',
    description: 'Utiliza luz delantera blanca y trasera roja, además de reflectantes. El sistema de alumbrado conviene que sea a pilas o de dinamos con acumulador, para que la luz no se apague cuando te detienes.',
    image: img,
  },
  {
    title: 'Utiliza un casco si te hace sentir más seguro.',
    description: 'Pero recuerda que el uso del casco NO evita los accidentes. Una verdadera seguridad se basa en la utilización de medidas de protección activa: moderación de la velocidad, atención al conducir, prevenir los movimientos propios y de los demás, señalizar las maniobras, conducción defensiva...',
    image: img2,
  },
  {
    title: 'Circula a la velocidad adecuada.',
    description: 'Adáptate a la velocidad de la calle por donde circules y, a ser posible, elige calles tranquilas. Cuando circules por zonas de prioridad peatonal hazlo a una velocidad similar a la de los viandantes, teniendo siempre en cuenta la prioridad del peatón. Si hay mucha densidad peatonal, desciende de tu bicicleta y anda con ella al lado.',
    image: img,
  },
];

const NewsSection = () => (
  <section className="news-section">
    <h2>TIPS PARA ANDAR EN BICI EN LA CIUDAD</h2>
    <div className="news-grid">
      {news.map((item, index) => (
        <div key={index} className="news-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="news-description">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NewsSection;