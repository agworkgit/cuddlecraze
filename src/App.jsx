import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


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
                  <Home />
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

          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
