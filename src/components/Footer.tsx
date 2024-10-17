import React from 'react';
import '../styles/TribeGlobe.css'; // Se till att rätt CSS-fil importeras

// Function to capitalize the first letter of the month
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to get current date and format it
const getCurrentDate = () => {
  const today = new Date();
  const day = today.getDate();
  let month = today.toLocaleString("default", { month: "long" });

  // Capitalize the first letter of the month
  month = capitalizeFirstLetter(month);

  const year = today.getFullYear();

  return `${month} ${day}, ${year}`;
};

const Footer: React.FC = () => {
  return (
    <footer className="footer-container"> {/* Ny klass för footern */}
      <p>Holocene ©&ensp;</p>
      <p className="date">{getCurrentDate()}</p>
    </footer>
  );
};

export default Footer;

