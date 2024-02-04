import './footer.css'
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    const logoImage = theme === 'dark-mode' ? './logos/cuddle-craze-light.png' : './logos/cuddle-craze-dark.png';


    return (
        <div className='footer-container container'>
            <div className='brand-container'>
                <img className="footer-logo" src={logoImage} alt="" /><div className='footer-info'>
                    <h1 className='footer-end-title'>CuddleCraze</h1>
                    <div className="footer-title">
                        <h1 className="company-slogan">Where Every Pet Finds a Hug, and Every Heart Finds a Friend.</h1>
                        <span className="work-schedule">We are open from 9 to 5, Monday to Friday.</span>
                    </div>
                    <span className="footer-end-rights">© 2024 / Alex, Adam, Irene & Anthony</span>
                    
                </div>
            </div>
            <div className='footer-spacing'></div>
        </div>
    );
}

export default Footer;