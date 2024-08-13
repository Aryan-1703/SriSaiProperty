import HeroSection from "../components/Home/HeroSection";
import WelcomeSection from "../components/Home/WelcomeSection";

import Footer from "../components/Home/Footer";


const Home = () => {
    return (
        <div className="Home">          
            <HeroSection />
            <WelcomeSection />
            
            <Footer />
        </div>
    );
};

export default Home;
