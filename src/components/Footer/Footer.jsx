import FooterBrandIcon from '../Icons/FooterBrandIcon';
import './footer.css'


const Footer = () => {
    return (
        <div className='container'>
            <div className='footer'>
            <div className='brand-container'>
                <FooterBrandIcon className="footer-logo"/>
                <div className='footer-info'>
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
        </div>
    );
}

export default Footer;