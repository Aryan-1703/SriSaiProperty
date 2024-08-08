import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import UpcomingProjects from "../components/Home/UpcomingProject";
import Footer from "../components/Home/Footer";


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
