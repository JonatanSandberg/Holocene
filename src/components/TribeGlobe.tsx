import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import tribesData from '../data/tribesData';
import { useNavigate } from 'react-router-dom';
import earthBlue from '../assets/earthBlue.jpg';
import earthTopology from '../assets/earthTopology.png';
import nightSky from '../assets/nightSky.png';
import '../styles/TribeGlobe.css';
import Footer from './Footer';

interface TribeGlobeProps {
  onTribeClick: (tribeName: string) => void;
  onWeatherDataFetch: (coordinates: [number, number]) => void; // Add this prop to fetch weather data
}

const TribeGlobe: React.FC<TribeGlobeProps> = ({ onTribeClick, onWeatherDataFetch }) => {
  const globeRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!globeInstance.current && globeRef.current) {
      const world = Globe()(globeRef.current)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .globeImageUrl(earthBlue)
        .bumpImageUrl(earthTopology)
        .backgroundImageUrl(nightSky)
        .pointOfView({ lat: 20, lng: 0, altitude: 2 })
        .showAtmosphere(true)
        .atmosphereColor('lightblue')
        .atmosphereAltitude(0.25);

      // Add markers for tribes
      world
        .pointsData(tribesData)
        .pointLat((tribe) => tribe.coords[0])
        .pointLng((tribe) => tribe.coords[1])
        .pointAltitude(0.05)
        .pointColor(() => 'red')
        .pointRadius(0.6)
        .pointLabel((tribe) => `<b>${tribe.name}</b><br/>Region: ${tribe.region}`)
        .onPointClick((tribe) => {
          onTribeClick(tribe.name);
          navigate(`/tribe/${tribe.name}`);

          // Fetch weather data if function is provided
          if (onWeatherDataFetch) {
            onWeatherDataFetch(tribe.coords);
          }
        });

      // Handle globe click event
      world.onGlobeClick((lat, lng) => {
        console.log('Globe clicked at:', lat, lng);
        
        // Fetch weather data based on clicked coordinates
        if (onWeatherDataFetch) {
          onWeatherDataFetch([lat, lng]); // Pass clicked coordinates
        }
      });

      globeInstance.current = world;
    }

    const handleResize = () => {
      if (globeInstance.current) {
        globeInstance.current.width(window.innerWidth).height(window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [onTribeClick, onWeatherDataFetch, navigate]);

  return (
    <>
      <div ref={globeRef} className="globe-container" />
      <h1 className="header">HOLOCENE</h1>
      <h2 className="subheader">Embark on a Quest for the Things Called Tribes</h2>
      <button
        onClick={() => {
          console.log('Navigating to /favorites');
          navigate('/favorites');
        }}
        className="favorites-link"
      >
        FAVORITES
      </button>

      <button
        onClick={() => {
          console.log('Navigating to /about');
          navigate('/about');
        }}
        className="about-link"
      >
        ABOUT
      </button>

      {/* Footer component */}
      <Footer /> {/* Lägg till footern längst ner */}
    </>
  );
};

export default TribeGlobe;














