import '../styles/NotFound.css';
import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Animation1 from '../assets/Animation1.json';
import Animation2 from '../assets/Animation2.json';
import Animation3 from '../assets/Animation3.json';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const animations = [Animation1, Animation2, Animation3];
  const [randomAnimation, setRandomAnimation] = useState(animations[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    setRandomAnimation(animations[randomIndex]);
  }, []);

  return (
    <div className="error-main">
      <blockquote className="quote">"It's Not Us, It's YOU!!"</blockquote>
      <Player
        autoplay
        loop
        src={randomAnimation}
        style={{ height: '300px', width: '300px' }}
      />
      <Link to="/" className="homeLink">Take Me Home</Link>
    </div>
  );
};

export default NotFoundPage;

