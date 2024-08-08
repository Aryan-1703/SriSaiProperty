// HeroSection.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero-content">
        <h1 className="display-3"><b>FIND YOUR IDEAL HOME WITH US</b></h1>
        <br />
      </div>
    </section>
  );
};

export default HeroSection;
