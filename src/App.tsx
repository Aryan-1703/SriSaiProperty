import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import UpcomingProjects from "./components/UpcomingProject";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<WelcomeSection />
			<UpcomingProjects />
			<Footer />
		</div>
	);
};

export default App;
