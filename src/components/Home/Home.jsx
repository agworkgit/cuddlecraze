import Hero from "../Hero/Hero";
import './home.css';
import Highlight from "../../components/Highlight/Highlight"
import SectionBorder from "../SectionBorder/SectionBorder";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

function Home() {
    return ( 
        <div className="home-container">
        <Hero/>
        <SectionBorder />
        <Highlight/>
        <SectionBorder />
        <Testimonials />
        <SectionBorder />
        <Footer />
        </div>
     );
}

export default Home;