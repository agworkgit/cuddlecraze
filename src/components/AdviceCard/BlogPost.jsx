import React, { useState } from 'react';
import './BlogPost.css';
import './advice-card.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';

const BlogPost = ({ postData }) => {
  const [readStatus, setReadStatus] = useState({});
  const [favorites, setFavorites] = useState([]);

  const toggleReadStatus = () => {
    setReadStatus((prevStatus) => ({
      ...prevStatus,
      [postData.id]: !prevStatus[postData.id],
    }));
  };

  const toggleFavorite = () => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(postData.id)
        ? prevFavorites.filter((fav) => fav !== postData.id)
        : [...prevFavorites, postData.id]
    );
  };

  // Render the content paragraphs
  const contentParagraphs = Object.keys(postData.paragraphs).map((key) => (
    <p key={key} className="content-paragraph">
      {postData.paragraphs[key]}
    </p>
  ));

  // Render the keywords as buttons
  const keywordButtons = postData.keywords.map((keyword, index) => (
    <button key={index} className="keyword-button">
      {keyword}
    </button>
  ));

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
                onClick={toggleReadStatus}
              >
                {readStatus[postData.id] ? '✔️ Read!' : '📰 Mark as Read'}
              </button>
              <button
                className={`blog-post-fav-button ${
                  favorites.includes(postData.id) ? 'fav' : ''
                }`}
                onClick={toggleFavorite}
              >
                {favorites.includes(postData.id) ? '💖 Added!' : '🤍 Add to favourites'}
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
