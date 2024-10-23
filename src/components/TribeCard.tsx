import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tribesData from '../data/tribesData';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/TribeCard.css';

interface TribeCardProps {
  name: string;
  imageUrl: string;
  region: string;
  coordinates: { lat: number; lon: number };
}

interface WeatherData {
  temperature2mMean: number[];
  temperature2mMax: number[];
  temperature2mMin: number[];
  windSpeed10mMean: number[];
  precipitationSum: number[];
}

const TribeCard: React.FC<TribeCardProps> = () => {
  const { tribeName } = useParams<{ tribeName: string }>();
  const tribe = tribesData.find((tribe) => tribe.name === tribeName);
  const coordinates = tribe?.coords;

  const { favorites, setFavorites, removeFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (tribe) {
      const isFavorite = favorites.some((fav) => fav.name === tribe.name);
      setIsFavorited(isFavorite);
    }
  }, [favorites, tribe]);

  const fetchWeatherData = async () => {
    if (!coordinates) return;
    setLoading(true);
    setError(null);
    try {
      const params = {
        latitude: coordinates.lat,
        longitude: coordinates.lon,
        start_date: '1950-01-01',
        end_date: new Date().toISOString().split('T')[0],
        models: ['EC-Earth3P_HR'],
        daily: [
          'temperature_2m_mean',
          'temperature_2m_max',
          'temperature_2m_min',
          'wind_speed_10m_mean',
          'precipitation_sum',
        ],
      };
      const url = 'https://climate-api.open-meteo.com/v1/climate';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data.daily as WeatherData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = () => {
    if (!tribe) return;
    if (isFavorited) {
      removeFavorite(tribe.name);
    } else {
      setFavorites([...favorites, { name: tribe.name, imageUrl: tribe.imageUrl }]);
    }
    setIsFavorited(!isFavorited);
  };

  if (!tribe) return <p>Tribe not found</p>;

  return (
    <div className="tribe-card-container">
      <div className="tribe-card">
        <img src={tribe.imageUrl} alt={tribe.name} className="tribe-image" />
        <h3 className="article-title">{tribe.name}</h3>
        <p>{tribe.region}</p>
        <button className={`favorite-button ${isFavorited ? 'favorited' : ''}`} onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
        <button onClick={fetchWeatherData}>Get Weather Data</button>
        {loading && <p>Loading weather data...</p>}
        {error && <p className="error-message">Failed to fetch weather data: {error}</p>}
        {weatherData && (
          <div className="weather-data">
            <h4>Weather Data:</h4>
            <p>Temperature: {weatherData.temperature2mMean[0]}°C</p>
            <p>Max Temperature: {weatherData.temperature2mMax[0]}°C</p>
            <p>Min Temperature: {weatherData.temperature2mMin[0]}°C</p>
            <p>Wind Speed: {weatherData.windSpeed10mMean[0]} m/s</p>
            <p>Precipitation: {weatherData.precipitationSum[0]} mm</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TribeCard;
















