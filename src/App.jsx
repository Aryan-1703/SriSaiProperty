import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
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
