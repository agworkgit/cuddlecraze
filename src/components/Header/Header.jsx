import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { Link, useNavigate, useLocation } from 'react-router-dom';
/* import { Link as ScrollLink } from 'react-scroll'; */
import ReactSwitch from "react-switch";
import "./header.css";


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const logoImage = theme === 'dark-mode' ? './logos/cuddle-craze-light.png' : './logos/cuddle-craze-dark.png';

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo">
          <img className="nav-logo" src={logoImage} alt="" />
          <h1 className="nav-logo-title">CuddleCraze</h1>
        </Link>

        <div className={isMenuOpen ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => { handleMenuClose(); }}>
                <i className="bi bi-house nav-icon"></i> Home
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={() => { handleMenuClose(); }}>
                <i className="bi bi-house nav-icon"></i> Login / Sign Up
              </Link>
            </li> */}

            {navigate && (
              <>
                {location.pathname !== '/portfolio' && location.pathname !== '/contact' && (
                  <>
                    {/* <li className="nav-item">
                      <ScrollLink to="about" className="nav-link" smooth="true" duration={200} onClick={() => { handleMenuClose(); }}>
                        <i className="bi bi-person-circle nav-icon"></i> List Pet
                      </ScrollLink>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link to="/pets-page" className="nav-link" smooth="true" duration={200} onClick={() => { handleMenuClose(); }}>
                        <i className="bi bi-tools nav-icon"></i> Adopt
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link to="/advice" className="nav-link" onClick={() => { handleMenuClose(); }}>
                        <i className="bi bi-briefcase nav-icon"></i> Advice
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}

            <li className="nav-item">
              <Link to="/account-page" className="nav-link" onClick={() => { handleMenuClose(); }}>
                <i className="bi bi-file-earmark-code nav-icon"></i> Account
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pets-page" className="nav-link check-link" onClick={() => { handleMenuClose(); }}>
                <i className="bi bi-envelope nav-icon"></i> Adopt
              </Link>
            </li>

            {/* Theme Toggle */}
            <div className="switch-theme">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark-mode"}
                onColor="#FEFAE0"
                offColor="#283618"
                onHandleColor="#283618"
                activeBoxShadow='0 0 2px 3px #3bf'
                uncheckedIcon={false}
                checkedIcon={false}
                height={16}
                width={30}
              ></ReactSwitch>
            </div>
          </ul>

          {/* Close Menu Button */}
          {isMenuOpen && (
            <p className="nav-close button" onClick={handleMenuClose}>Close</p>
          )}
        </div>

        <div className="nav-toggle" onClick={handleMenuToggle}>
          <p className="open-drawer">Menu</p>

        </div>

        {/* Theme Toggle for Mobile */}
        <div className="switch-theme-mobile">
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark-mode"}
            onColor="#FEFAE0"
            offColor="#283618"
            onHandleColor="#283618"
            activeBoxShadow='0 0 2px 3px #3bf'
            uncheckedIcon={false}
            checkedIcon={false}
            height={16}
            width={30}
          ></ReactSwitch>
        </div>
      </nav>
    </header>
  );
}

export default Header;