import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home/HeroSection.css';

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    '/backgrounds/background1.jpg',
    
    '/backgrounds/background3.jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [backgrounds.length]);

  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white" style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}>
      <div className="hero-content">
        <h1 className="display-3"><b>FIND YOUR IDEAL HOME WITH US</b></h1>
        <br />
      </div>
    </section>
  );
};

export default HeroSection;
