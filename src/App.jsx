import './App.css'

import { HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import CheckPetsPage from './pages/CheckPetsPage/CheckPetsPage';
import adviceData from './components/AdviceCard/data/advice-data.json';
import AdvicePage from "./pages/AdvicePage/AdvicePage";
import AccountPage from './pages/AccountPage/AccountPage';
import BlogPost from './components/AdviceCard/BlogPost';
import PetPage from './pages/PetPage/PetPage';


export const ThemeContext = createContext('dark-mode');

export const BlogPostContainer = () => {
  const { id } = useParams();
  const selectedPost = adviceData.find((post) => post.id === parseInt(id));

  return <BlogPost postData={selectedPost} />;
};

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
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                </>
              }
            />

            <Route
              path="/advice-page"
              element={
                <>
                  <AdvicePage id="advice-page" />
                </>
              }
            />

            <Route
              path="/advice-page/blog/:id"
              element={<BlogPostContainer />}
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
              path="/check-pets-page"
              element={
                <>
                  <CheckPetsPage id="check-pets-page" />
                </>
              }
            />


            <Route path="/pet-page" element={<PetPage id="pet-page" />} />


          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
