import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PetsPage from './pages/PetsPage/PetsPage';
import AccountPage from './pages/AccountPage/AccountPage';
import AdvicePageMain from './pages/AdvicePage/AdvicePageMain';
import BlogPost from './components/AdviceCard/BlogPost';
import adviceData from './components/AdviceCard/data/advice-data.json';

export const ThemeContext = createContext('dark-mode');

export const App = () => {
  const storedTheme = localStorage.getItem('theme') || 'dark-mode';
  const [theme, setTheme] = useState(storedTheme);
  const [favorites, setFavorites] = useState({});

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark-mode' ? 'light-mode' : 'dark-mode'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (postId) => {
    try {
      const response = await axios.put(`http://localhost:5173/api/favorites/${postId}`, { favorites: !favorites[postId] });
      if (response.data.success) {
        setFavorites((prevFavorites) => ({
          ...prevFavorites,
          [postId]: !prevFavorites[postId],
        }));
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App' id={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/account-page' element={<AccountPage />} />
            <Route path='/pets-page' element={<PetsPage />} />
            <Route
              path='/advice'
              element={<AdvicePageMain adviceData={adviceData} toggleFavorite={toggleFavorite} />}
            />
            <Route
              path='/advice/blog/:id'
              element={<BlogPostContainer adviceData={adviceData} favorites={favorites} />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

const BlogPostContainer = () => {
  const { id } = useParams();
  const selectedPost = adviceData.find((post) => post.id === parseInt(id));

  return <BlogPost postData={selectedPost} />;
};

export default App;