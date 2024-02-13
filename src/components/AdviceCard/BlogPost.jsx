/* eslint react/prop-types: 0 */

import './blog-post.css';
import './advice-card.css';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

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
      <div className="blog-page container">
        <div className="blog-post section">
          <div className="blog-post-content">
            <h2 className="blog-post-title">{postData.title}</h2>
            <img className="blog-post-image" src={postData.image} alt={postData.title} />
          </div>

          <p className="blog-post-min-read">{postData.minutes} min read</p>
          <h3 className="blog-post-description">{postData.description}</h3>
          <div className="blog-post-paragraphs">{contentParagraphs}</div>
          <div className="blog-post-keywords">{keywordButtons}</div>
          <div className="blog-post-buttons">
          <div className='blog-buttons-group'>
            <button
              className={`blog-post-read-button button ${readStatus[postData.id] ? 'read' : ''
                }`}
              onClick={toggleReadStatus}
            >
              {readStatus[postData.id] ? 'Read!' : 'Mark as Read'}
            </button>
            <button
              className={`blog-post-fav-button button ${favorites.includes(postData.id) ? 'fav' : ''
                }`}
              onClick={toggleFavorite}
            >
              {favorites.includes(postData.id) ? 'Added!' : 'Add to favourites'}
            </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
