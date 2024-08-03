import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Project';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
