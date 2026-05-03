/*-------------------- Imports --------------------*/

import React, { useState } from 'react';
import { HonkaiStarRailCharacters } from './Honkaidata';
import { HsrCharacter } from '../components/Character';

/*-------------------- Honkai Page --------------------*/

const HonkaiPage = () => {
  const [honkaiType, setHonkaiType] = useState('All');
  const [honkaiWorld, setHonkaiWorld] = useState('All');
  const [honkaiPath, setHonkaiPath] = useState('All');

  // Filter characters based on selected type, world, and path
  const filterCharacters = (characters, type, world, path) => {
    return characters.filter(([id,character]) => {
      const matchesType = type === 'All' || character.type === type;
      const matchesWorld = world === 'All' || character.world === world;
      const matchesPath = path === 'All' || character.path === path;
      return matchesType && matchesWorld && matchesPath;
    });
  };
  //other character navigation- stellaron hunters, cosmic, interastral peace corp
  // Render characters based on selected filters
  const renderCharacters = (characters, type, world, path) => {
    return filterCharacters(characters, type, world, path).map(([id,character]) => (
        <HsrCharacter key={id} id={id} />
      ));
  };

  return (
    <div className="section">
      <h2>Honkai Star Rail Characters</h2>

      <div className="filters">
        <select onChange={(e) => setHonkaiType(e.target.value)} value={honkaiType}>
          <option value="All">All Types</option>
          <option value="Physical">Physical</option>
          <option value="Fire">Fire</option>
          <option value="Ice">Ice</option>
          <option value="Wind">Wind</option>
          <option value="Quantum">Quantum</option>
          <option value="Imaginary">Imaginary</option>
          <option value="Lightning">Lightning</option>
        </select>

        <select onChange={(e) => setHonkaiWorld(e.target.value)} value={honkaiWorld}>
          <option value="All">All Worlds</option>
          <option value="Astral Express">Astral Express</option>
          <option value="Herta Space Station">Herta Space Station</option>
          <option value="Jarilo-VI">Jarilo-VI</option>
          <option value="The Xianzhou Luofu">The Xianzhou Luofu</option>
          <option value="Penacony">Penacony</option>
          <option value="Amphoreus">Amphoreus</option>
        </select>

        <select onChange={(e) => setHonkaiPath(e.target.value)} value={honkaiPath}>
          <option value="All">All Paths</option>
          <option value="Nihility">Nihility</option>
          <option value="Remembrance">Remembrance</option>
          <option value="Erudition">Erudition</option>
          <option value="Destruction">Destruction</option>
          <option value="Harmony">Harmony</option>
          <option value="Preservation">Preservation</option>
          <option value="Abundance">Abundance</option>
          <option value="The Hunt">The Hunt</option>
        </select>
      </div>

      <div className="character-list">
        {renderCharacters(Object.entries(HonkaiStarRailCharacters), honkaiType, honkaiWorld, honkaiPath)}
      </div>
    </div>
  );
};

export default HonkaiPage;
