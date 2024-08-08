import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import UpcomingProjects from "../components/UpcomingProject";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div className="Home">
            <HeroSection />
            <WelcomeSection />
            <UpcomingProjects />
            <Footer />
        </div>
    );
};

export default Home;
