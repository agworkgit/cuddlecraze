import React, { useState } from 'react';
import './BlogPost.css';
import './advice-card.css';
import FavouriteIconAdvice from './FavouriteIconAdvice';

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
    <div className="blog-post">
      <div className="blog-post-image">
        <img src={postData.image} alt={postData.title} />
      </div>
      <div className="blog-post-content">
        <h2 className="blog-post-title">{postData.title}</h2>
        <p className="blog-post-min-read">{postData.minutes} min read</p>
        <p className="blog-post-description">{postData.description}</p>
        <div className="blog-post-paragraphs">{contentParagraphs}</div>
        <div className="blog-post-keywords">{keywordButtons}</div>
        <div className="blog-post-buttons">
          <button
            className={`blog-post-read-button ${
              readStatus[postData.id] ? 'read' : ''
            }`}
            onClick={toggleReadStatus}
          >
            {readStatus[postData.id] ? 'Mark as Unread' : 'Mark as Read'}
          </button>
          <button
            className={`blog-post-fav-button ${
              favorites.includes(postData.id) ? 'fav' : ''
            }`}
            onClick={toggleFavorite}
          >
            <span className="heart-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;