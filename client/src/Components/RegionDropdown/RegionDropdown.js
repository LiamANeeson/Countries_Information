import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegionDropdown = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div>
      <label htmlFor="region">Search Countries in a region:  </label>
      <select id="region" value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      {selectedRegion && (
        <Link to={`countries/region/${selectedRegion}`}>
          <button>View Countries</button>
        </Link>
      )}
    </div>
  );
};

export default RegionDropdown;


