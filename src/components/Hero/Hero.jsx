import HeroCard from "./HeroCard";
import DogFacts from "../DogFacts/DogFacts";
import SectionBorder from "../SectionBorder/SectionBorder";

function Hero() {
    return ( 
        <div className="hero-container container grid">
        <HeroCard />
        <SectionBorder/>
        <DogFacts />
        </div>
     );
}

export default Hero;