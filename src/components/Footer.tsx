import React from 'react';
import '../styles/TribeGlobe.css';

const Footer: React.FC = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();

    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;
  };

  return (
    <footer className="footer-container">
      <p>Holocene © {getCurrentDate()}</p>
    </footer>
  );
};

export default Footer;

