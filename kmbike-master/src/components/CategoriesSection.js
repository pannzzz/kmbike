import React from 'react';
import '../styles/CategoriesSection.css';
import img from '../assets/Anthem.jpg';

const categories = [
  { name: 'RUTA', image: `${img}` },
  { name: 'MTB', image: `${img}` },
  { name: 'GRAVEL', image: `${img}` },
  { name: 'E-BIKES', image: `${img}` },
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