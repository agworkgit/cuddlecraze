import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../AdviceCard/data/advice-data.json';

function FavoritePostsContainer() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (postId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      if (updatedFavorites[postId]) {
        delete updatedFavorites[postId];
      } else {
        updatedFavorites[postId] = true;
      }
      localStorage.setItem('favoritedData', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
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
    const interval = setInterval(() => {
      const favoritedData = localStorage.getItem('favoritedData');
      if (favoritedData) {
        setFavorites(JSON.parse(favoritedData));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run this effect only once on initial render

  return (
    <>
      <div className="cardContainer">
        {blogData
          .filter((post) => favorites[post.id])
          .map((post) => (
            <div key={post.id} className="card">
              <Link
                to={{
                  pathname: `/advice/blog/${post.id}`,
                  state: { ...post }
                }}
                className="card-link"
                target="_blank"
              >
                <h2 className="advice-title">{post.title}</h2>
                <img src={post.image} alt={post.title} className="card-image" />
                <p className="advice-subtitle">{post.description}</p>
                <p className="min-read">{post.minutes} min read</p>
              </Link>
              <button
                className={`blog-post-fav-button ${favorites[post.id] ? 'fav' : 'addfav'}`}
                onClick={() => toggleFavorite(post.id)}
              >
                {favorites[post.id] ? '💖 Added!' : '🤍 Add to favorites'}
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default FavoritePostsContainer;