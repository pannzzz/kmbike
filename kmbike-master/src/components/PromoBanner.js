import React, { useState, useEffect } from 'react';
import '../styles/PromoBanner.css';
import img1 from '../assets/Bici.jpg';
import img2 from '../assets/Bici2.png';
import img3 from '../assets/Bici3.jpg';

// Array de imágenes
const images = [img1, img2, img3];

const PromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <section className="promo-banner">
      <div className="carousel-container">
        <div className="carousel">
          {/* Botón para ir al slide anterior */}
          <button className="carousel-button prev" onClick={prevSlide}>
            &#8249;
          </button>
          {/* Imagen del slide actual */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="promo-image"
          />
          {/* Botón para ir al siguiente slide */}
          <button className="carousel-button next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
