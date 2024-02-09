import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import './advice-card.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';

const BlogPost = ({ postData }) => {
  const [readStatus, setReadStatus] = useState({});
  const [favorites, setFavorites] = useState(false);

  const toggleReadStatus = (id) => {
    setReadStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const toggleFavorite = () => {
    setFavorites((prevFavorites) => !prevFavorites);
  };

  useEffect(() => {
    const favoritedData = localStorage.getItem('favoritedData');
    if (favoritedData) {
      setFavorites(JSON.parse(favoritedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritedData', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const jsonData = JSON.stringify({ readStatus });
    localStorage.setItem('jsonData', jsonData);
  }, [readStatus]);

  const contentParagraphs = Object.keys(postData.paragraphs).map((key) => (
    <p key={key} className="content-paragraph">
      {postData.paragraphs[key]}
    </p>
  ));

  const keywordButtons = postData.keywords.map((keyword, index) => (
    <button key={index} className="keyword-button">
      {keyword}
    </button>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      const favoritedData = localStorage.getItem('favoritedData');
      if (favoritedData) {
        setFavorites(JSON.parse(favoritedData));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="blog-post-content">
            <div className="blog-post-image">
              <h2 className="blog-post-title">{postData.title}</h2>
              <img src={postData.image} alt={postData.title} />
            </div>
            <p className="blog-post-min-read">{postData.minutes} min read</p>
            <h3 className="blog-post-description">{postData.description}</h3>
            <div className="blog-post-paragraphs">{contentParagraphs}</div>
            <div className="blog-post-keywords">{keywordButtons}</div>
            <div className="blog-post-buttons">
              <button
                className={`blog-post-read-button ${
                  readStatus[postData.id] ? 'read' : ''
                }`}
                onClick={() => toggleReadStatus(postData.id)}
              >
                {readStatus[postData.id] ? '✔️ Read!' : '📰 Mark as Read'}
              </button>
              <button
                className={`blog-post-fav-button ${
                  favorites ? 'fav' : ''
                }`}
                onClick={toggleFavorite}
              >
                {favorites ? '💖 Added!' : '🤍 Add to favourites'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SectionBorder />
      <Footer />
      <SectionBorder />
    </>
  );
};

export default BlogPost;