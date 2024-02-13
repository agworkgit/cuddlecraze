import './landing-page.css';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Highlight from '../../components/Highlight/Highlight';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
    return (
        <div className='landing-page container section'>
            <Navbar />
            <Hero />
            <SectionBorder />
            <Highlight />
            <SectionBorder />
            <Testimonials />
            <SectionBorder />
            <Newsletter />
            <SectionBorder />
            <Footer />
        </div>
    );
}

export default LandingPage;