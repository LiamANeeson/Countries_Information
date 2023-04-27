import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./RegionDropdown.css"

const RegionDropdown = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className='button-caption'>
      <label htmlFor="region">Get list of countries in a region:  </label>
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
          <button className='view-countries-btn '>View Countries</button>
        </Link>
      )}
    </div>
  );
};

export default RegionDropdown;


