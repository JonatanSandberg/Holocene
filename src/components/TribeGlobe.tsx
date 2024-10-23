import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Globe from 'globe.gl';
import tribesData from '../data/tribesData';
import earthBlue from '../assets/earthBlue.jpg';
import earthTopology from '../assets/earthTopology.png';
import nightSky from '../assets/nightSky.png';
import '../styles/TribeGlobe.css';
import Footer from './Footer';
import logo from '../assets/logo.svg';

const TribeGlobe: React.FC<{
  onTribeClick: (tribeName: string) => void;
  onWeatherDataFetch: (coordinates: [number, number]) => void;
}> = ({ onTribeClick, onWeatherDataFetch }) => {
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
        .atmosphereAltitude(0.25)
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
          onWeatherDataFetch(tribe.coords);
        })
        .onGlobeClick((lat, lng) => {
          onWeatherDataFetch([lat, lng]);
        });

      globeInstance.current = world;
    }

    const handleResize = () => {
      if (globeInstance.current) {
        globeInstance.current.width(window.innerWidth).height(window.innerHeight);
      }
    };

    // Debounce the resize event handler
    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [onTribeClick, onWeatherDataFetch, navigate]);

  // Debounce function to limit the rate at which a function can fire
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <Suspense fallback={<div>Loading globe...</div>}>
      <div ref={globeRef} className="globe-container" />
      <h1 className="header">
        <img src={logo} alt="Logo" className="logo" loading="lazy" />
        HOLOCENE
      </h1>
      <h2 className="subheader">Interweaving Climate Models with Indigenous Experiences</h2>
      <button onClick={() => navigate('/favorites')} className="favorites-link">FAVORITES</button>
      <button onClick={() => navigate('/about')} className="about-link">ABOUT</button>
      <button onClick={() => navigate('/quiz')} className="quiz-link">QUIZ</button>
      <Footer />
    </Suspense>
  );
};

export default TribeGlobe;



















