import './App.css';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`} id={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account-page" element={<AccountPage />} />
            <Route path="/pets-page" element={<PetsPage />} />
            <Route path="/advice" element={<AdvicePageMain />} />
            <Route path="/advice/blog/:id" element={<BlogPostContainer />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

const BlogPostContainer = () => {
  const { id } = useParams();
  const selectedPost = adviceData.find(post => post.id === parseInt(id));

  return <BlogPost postData={selectedPost} />;
};

export default App;