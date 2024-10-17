/* src/pages/Favorites.tsx */
import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; // Hämta favoriter från kontext
import FavoriteAnimation from '../assets/FavoriteAnimation.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import '../styles/Favorites.css';

interface Tribe {
  name: string;
  imgUrl: string;
}

const FavoritesPage: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites(); // Hämta favoriter och borttagning från context
  const navigate = useNavigate(); // Navigering bakåt

  console.log(favorites); // Felsökning: logga favoriter i konsolen

  // Function to navigate to the TribeArticle page
  const handleLearnMore = (tribe: Tribe) => {
    navigate(`/tribe/${tribe.name}`, { state: { tribe } }); // Pass tribe data as state
  };

  return (
    <main className="main-favorites">
      <header className="favorites-header">
        <h1 className="header">FAVORITE TRIBES</h1>
        <button onClick={() => navigate(-1)} className="goback-btn">RETURN</button>
      </header>

      <section className="content-container">
        {favorites.length === 0 ? (
          <div className="empty-message-container">
            <Player
              autoplay
              loop
              src={FavoriteAnimation}
              style={{ height: '300px', width: '300px' }}
            />
            <p className="empty-message">You have no saved favorites...</p>
          </div>
        ) : (
          <div className="tribe-grid">
            {favorites.map((tribe) => (
              <div className="tribe-card" key={tribe.name}>
                <img src={tribe.imgUrl} alt={tribe.name} className="tribe-image" />
                <div className="tribe-details">
                  <h3 title={tribe.name} className="tribe-name">{tribe.name}</h3>
                  <button
                    className="remove-btn"
                    onClick={() => removeFavorite(tribe.name)}
                  >
                    Remove
                  </button>
                  {/* Learn More button */}
                  <button
                    className="learn-more-btn"
                    onClick={() => handleLearnMore(tribe)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;





