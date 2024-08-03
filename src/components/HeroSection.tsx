// HeroSection.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero-content">
        <h1 className="display-4">Welcome to Sri Sai Property</h1>
        <p className="lead">Apunka adda</p>
      </div>
    </section>
  );
};

export default HeroSection;
