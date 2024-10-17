// src/components/TribeInfo.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import tribesData from '../data/tribesData';

const TribeInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Urfolk</h2>
      <ul>
        {tribesData.map((tribe) => (
          <li key={tribe.name}>
            <button onClick={() => navigate(`/tribe/${tribe.name}`)}>
              {tribe.name} - {tribe.region}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TribeInfo;





