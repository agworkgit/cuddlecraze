import React, { useState } from 'react';
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

  return (
    <div className="advice-card">
      <img src={postData.image} alt={postData.title} className="card-image" />
      <div className="card-info">
        <h2 className="advice-title">{postData.title}</h2>
        <p className="min-read">{postData.minutes} min read</p>
        <p className="description">{postData.description}</p>
        <p className="content">{postData.content}</p>
      </div>
      <div className="card-buttons">
        <button
          className={`read-button ${readStatus[postData.id] ? 'read' : ''}`}
          onClick={toggleReadStatus}
        >
          {readStatus[postData.id] ? 'Mark as Unread' : 'Mark as Read'}
        </button>
        <FavouriteIconAdvice
          isFavourite={favorites.includes(postData.id)}
          onClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default BlogPost;