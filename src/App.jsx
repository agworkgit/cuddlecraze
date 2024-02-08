import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PetsPage from './pages/PetsPage/PetsPage';
import AccountPage from './pages/AccountPage/AccountPage';
import PetPage from './pages/PetPage/PetPage';


export const ThemeContext = createContext('dark-mode');

export const App = () => {
  const storedTheme = localStorage.getItem('theme') || 'dark-mode';
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark-mode' ? 'light-mode' : 'dark-mode'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Router basename="/">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  {/* <Home />
              <About id="about"/>
              <Skills id="skills"/>
              <Services id="services"/>
              <Qualification id="qualifications"/>
              <Testimonials id="testimonials"/>
              <Footer /> */}
                </>
              }
            />
            {/* <Route
          path="/contact"
          element={
            <>
              <Contact id="contact" />
              <Footer id="footer" />
            </>
          }
        /> */}
            <Route
              path="/login"
              element={
                <>
                  <LoginPage id="login" />
                </>
              }
            />
            <Route
              path="/account-page"
              element={
                <>
                  <AccountPage id="account-page" />
                </>
              }
            />
            <Route
              path="/pets-page"
              element={
                <>
                  <PetsPage id="pets-page" />
                </>
              }
            />
            <Route
            path="/pet-page"
            element={
              <>
                <PetPage id="pet-page" />
              </>
            }
            />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
