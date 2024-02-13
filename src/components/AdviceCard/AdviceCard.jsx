/* eslint react/prop-types: 0 */

// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './advice-card.css';
import './blog-post.css';

const AdviceCard = ({ advice }) => {
  // const [readStatus, setReadStatus] = useState({});
  // const [favorites, setFavorites] = useState({});

  // const toggleReadStatus = (id) => {
  //   setReadStatus((prevStatus) => ({
  //     ...prevStatus,
  //     [id]: !prevStatus[id],
  //   }));
  // };

  // const toggleFavorite = (id) => {
  //   setFavorites((prevFavorites) => ({
  //     ...prevFavorites,
  //     [id]: !prevFavorites[id],
  //   }));
  // };

  return (
    <div>
      <div className="advice-card section grid">
        {advice.map((adviceItem) => (
          <div key={adviceItem.id} className="advice-card">
            <img src={adviceItem.image} alt={adviceItem.title} className="card-image" />
            <div className="card-info">
              <h2 className="advice-title">{adviceItem.title}</h2>
              <p className="advice-subtitle">{adviceItem.description}</p>
              <p className="min-read">{adviceItem.minutes} min read</p>

            </div>

            <div className="card-buttons">
              <div className="advice-card-keywords">
                {adviceItem.keywords.map((keyword, index) => (
                  <button key={index} className="keyword-button">
                    {keyword}
                  </button>
                ))}
              </div>

              <div className='card-buttons-group'>
                <button
                  className={`button`}>
                  <Link
                    to={{
                      pathname: `/advice-page/blog/${adviceItem.id}`,
                      state: {
                        ...adviceItem, // Pass all properties from the adviceItem object
                      },
                    }}
                    className="advice-link"
                    target="_blank"
                  >
                    Read Article
                  </Link>
                </button>

                {/* <button
                  className={`advice-card-read-button button ${readStatus[adviceItem.id] ? 'read' : ''}`}
                  onClick={() => toggleReadStatus(adviceItem.id)}
                >
                  {readStatus[adviceItem.id] ? 'Read!' : 'Mark as Read'}
                </button>
                <button
                  className={`advice-card-fav-button button ${favorites[adviceItem.id] ? 'fav' : 'addfav'}`}
                  onClick={() => toggleFavorite(adviceItem.id)}
                >
                  {favorites[adviceItem.id] ? 'Added!' : 'Add to favourites'}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdviceCard;