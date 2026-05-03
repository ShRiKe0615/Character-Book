/*-------------------- Imports --------------------*/

import React, { useState } from 'react';
import { GenshinCharacters } from './Genshindata';
import { GiCharacter } from '../components/Character';

/*-------------------- Genshin Page --------------------*/

const GenshinPage = () => {
  const [genshinElement, setGenshinElement] = useState('All');
  const [genshinNation, setGenshinNation] = useState('All');

  // Filter characters based on selected element and nation
  const filterCharacters = (characters, element, nation) => {
  return characters.filter(([id, character]) => {
    const matchesElement = element === 'All' || character.element === element;
    const matchesNation = nation === 'All' || character.nation === nation;
    return matchesElement && matchesNation;
    });
  };
  // Render characters based on selected element and nation
  const renderCharacters = (characters, element, nation) => {
    return filterCharacters(characters, element, nation).map(([ id, character]) => (
        <GiCharacter key={id} id={id} />
      ));
  };

  return (
    <div className="section">
      <h2>Genshin Impact Characters</h2>

      <div className="filters">
        <select onChange={(e) => setGenshinElement(e.target.value)} value={genshinElement}>
          <option value="All">All Elements</option>
          <option value="Anemo">Anemo</option>
          <option value="Geo">Geo</option>
          <option value="Electro">Electro</option>
          <option value="Dendro">Dendro</option>
          <option value="Hydro">Hydro</option>
          <option value="Pyro">Pyro</option>
          <option value="Cryo">Cryo</option>
        </select>

        <select onChange={(e) => setGenshinNation(e.target.value)} value={genshinNation}>
          <option value="All">All Nations</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Liyue">Liyue</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Sumeru">Sumeru</option>
          <option value="Fontaine">Fontaine</option>
          <option value="Natlan">Natlan</option>
          <option value="Nod-Krai">Nod-Krai</option>
          <option value="Snezhnaya">Snezhnaya</option>
        </select>
      </div>
      
      <div className="character-list">
        {renderCharacters(Object.entries(GenshinCharacters), genshinElement, genshinNation)}
      </div>
    </div>
  );
};

export default GenshinPage;