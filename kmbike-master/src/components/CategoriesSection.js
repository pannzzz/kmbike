import React from 'react';
import '../styles/CategoriesSection.css';
import img from '../assets/Anthem.jpg';
import img2 from '../assets/mtb.jpg';
import img3 from '../assets/gravel.jpg';

const categories = [
  { name: 'RUTA', image: `${img}` },
  { name: 'MTB', image: `${img2}` },
  { name: 'GRAVEL', image: `${img3}` },
];

const CategoriesSection = () => (
  <section className="categories-section">
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} />
          <div className="overlay">
            <span>{category.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CategoriesSection;