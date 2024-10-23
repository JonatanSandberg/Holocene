import React from 'react';
import '../styles/WeatherMetricCard.css';

interface WeatherMetricCardProps {
  metric: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}

const WeatherMetricCard: React.FC<WeatherMetricCardProps> = ({ metric, description, imageSrc, onClick }) => (
  <div className="weather-metric-card" onClick={onClick}>
    <img src={imageSrc} alt={metric} className="metric-image" />
    <h3>{metric}</h3>
    <p>{description}</p>
  </div>
);

export default WeatherMetricCard;





