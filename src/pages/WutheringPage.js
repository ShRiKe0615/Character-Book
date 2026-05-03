/*-------------------- Imports --------------------*/

import React, { useState } from 'react';
import { WutheringWavesCharacters } from './Wutheringdata';
import { WuwaCharacter } from '../components/Character';

/*-------------------- Wuthering Page --------------------*/

const WutheringPage = () => {
  const [wutheringAttribute, setWutheringAttribute] = useState('All');
  const [wutheringRegion, setWutheringRegion] = useState('All');

  // Filter characters based on selected attribute and region
  const filterCharacters = (characters, attribute, region) => {
    return characters.filter(([id,character]) => {
      const matchesAttribute = attribute === 'All' || character.attribute === attribute;
      const matchesRegion = region === 'All' || character.region === region;
      return matchesAttribute && matchesRegion;
    });
  };
  // Render characters based on selected attribute and region
  const renderCharacters = (characters, attribute, region) => {
    return filterCharacters(characters, attribute, region).map(([id,character]) => (
        <WuwaCharacter key={id} id={id} />
      ));
  };

  return (
    <div className="section">
      <h2>Wuthering Waves Characters</h2>

      <div className="filters">
        <select onChange={(e) => setWutheringAttribute(e.target.value)} value={wutheringAttribute}>
          <option value="All">All Attribute</option>
          <option value="Spectro">Spectro</option>
          <option value="Havoc">Havoc</option>
          <option value="Aero">Aero</option>
          <option value="Glacio">Glacio</option>
          <option value="Fusion">Fusion</option>
          <option value="Electro">Electro</option>
        </select>

        <select onChange={(e) => setWutheringRegion(e.target.value)} value={wutheringRegion}>
          <option value="All">All Regions</option>
          <option value="Huanglong">Huanglong</option>
          <option value="The Black Shore">The Black Shore</option>
          <option value="Rinascita">Rinascita</option>
          <option value="New Federation">New Federation</option>
        </select>
      </div>
      
      <div className="character-list">
        {renderCharacters(Object.entries(WutheringWavesCharacters), wutheringAttribute, wutheringRegion)}
      </div>
    </div>
  );
};

export default WutheringPage;