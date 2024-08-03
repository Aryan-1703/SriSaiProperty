import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import Upcoming from "./components/Upcoming";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<WelcomeSection />
			<Upcoming />
			<Footer />
		</div>
	);
};

export default App;
