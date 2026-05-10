/* import React from 'react';

const Character = ({ name, element, region, description, image }) => {
  return (
    <div className="character" style={{ backgroundImage: `url(${image})` }}>
      <h2>{name}</h2>
      <p><strong>Element:</strong> {element}</p>
      <p><strong>Region:</strong> {region}</p>
      <p>{description}</p>
      <button ><h3>{name}</h3></button>
    </div>
  );
};

export default Character; */

/*
import React, { useState } from 'react';

const Character = ({ name, element, region, description, image }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClick = () => { setIsCollapsed(prevState => !prevState); };

  return (
    <div className="character" style={{ backgroundImage: `url(${image})` }}>
      {!isCollapsed ? (
        <>
          <h2>{name}</h2>
          <p><strong>Element:</strong> {element}</p>
          <p><strong>Region:</strong> {region}</p>
          
          <button onClick={handleClick}><p>Show More</p></button>
        </>
      ) : (
        <div className="description">
          <h3>Additional Info for {name}</h3>
          <p>{description}</p>
          <button onClick={handleClick}><p>Show Less</p></button>
        </div>
      )}
    </div>
  );
};

export default Character; */

/*-------------------- Imports --------------------*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GenshinCharacters } from '../pages/Genshindata';
import { HonkaiStarRailCharacters } from '../pages/Honkaidata';
import { WutheringWavesCharacters } from '../pages/Wutheringdata';
import './CharacterCard.css';
import { useFavorite } from './Utility';

/*-------------------- Global Data --------------------*/
// const gameID = {
//   1: 'GI',
//   2: 'HSR',
//   3: 'WuWa',
// };

/*-------------------- Genshin Character Function --------------------*/

export const GiCharacter = ({ id, gameID=1 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorite(gameID,id);
  const character = GenshinCharacters[id];
  const handleFlip = () => setIsFlipped(prev => !prev);
  const navigate = useNavigate();

  const handleViewTalent = (e) => {
    e.stopPropagation();
    navigate('/Talent', { state: { characterName: character.name, game: 'Genshin Impact' } });
  };

  // // const unqkey = '${gameID}${id}' //unique key to identify each character
  // // Check if the character is already in favorites on mount
  // useEffect(() => {
  //   // const favcardkey = 'favorites_${gameID[1]}'
  //   const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //   const isAlreadyFavorite = savedFavorites.some(fav => fav.name === name);
  //   setIsFavorite(isAlreadyFavorite); // Set the favorite state based on localStorage
  //   }, [name]);

  // // Toggle favorite and handle duplicates
  // const toggleFavorite = (e) => {
  //   e.stopPropagation();
  //   const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  //   if (isFavorite) {
  //     // Remove character from favorites if already present
  //     const updatedFavorites = savedFavorites.filter(fav => fav.name !== name);
  //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //   } else {
  //     // Add character to favorites
  //     const newFavorite = { name, element };
  //     savedFavorites.push(newFavorite);
  //     localStorage.setItem('favorites', JSON.stringify(savedFavorites));
  //   }
  //   // Update the favorite button state
  //   setIsFavorite(prevState => !prevState);
  // };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>

        {/* Front Side */}
        <div className="card-front" style={{ backgroundImage: `url(${character.image || 'default-image-url.jpg'})` }}>
          <button className="theme-toggle-btn" onClick={toggleFavorite}> {isFavorite ? '❤️' : '🤍'} </button>
          <div className="card-content">
            <h2 style={{color: '#3C1361'}}>{character.name}</h2> {/*baad me inline to external maybe*/}
            <p><strong>Element:</strong> {character.element}</p>
            <p><strong>Nation:</strong> {character.nation}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="card-content">
            <h3>More About {character.name}</h3>
            <p>Rarity: {character.rarity}</p>
            <p>Weapon: {character.weapon}</p>
            <p>Version: {character.version}</p>
            <p>{character.description}</p>
            <button className="teleport-btn" onClick={handleViewTalent}>View Talents ➜</button>
          </div>
        </div>

      </div>
    </div>
  );
};


/*-------------------- Hsr Character Function --------------------*/

export const HsrCharacter = ({ id, gameID=2 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorite(gameID,id);
  const character = HonkaiStarRailCharacters[id];
  const handleFlip = () => setIsFlipped(prev => !prev);
  const navigate = useNavigate();

  const handleViewTalent = (e) => {
    e.stopPropagation();
    navigate('/Talent', { state: { characterName: character.name, game: 'Honkai Star Rail' } });
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        
        {/* Front Side */}
        <div className="card-front" style={{ backgroundImage: `url(${character.image || 'default-image-url.jpg'})` }}>
          <button className="theme-toggle-btn" onClick={toggleFavorite}> {isFavorite ? '❤️' : '🤍'} </button>
          <div className="card-content">
            <h2>{character.name}</h2>
            <p><strong>Type:</strong> {character.type}</p>
            <p><strong>World:</strong> {character.world}</p>
            <p><strong>Path:</strong> {character.path}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="card-content">
            <h3>More About {character.name}</h3>
            <p>Rarity: {character.rarity}</p>
            <p>Weapon: {character.weapon}</p>
            <p>Version: {character.version}</p>
            <p>{character.description}</p>
            <button className="teleport-btn" onClick={handleViewTalent}>View Talents ➜</button>
          </div>
        </div>

      </div>
    </div>
  );
};

/*-------------------- Wuwa Character Function --------------------*/

export const WuwaCharacter = ({ id, gameID=3 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorite(gameID,id);
  const character = WutheringWavesCharacters[id];
  const handleFlip = () => setIsFlipped(prev => !prev);
  const navigate = useNavigate();

  const handleViewTalent = (e) => {
    e.stopPropagation();
    navigate('/Talent', { state: { characterName: character.name, game: 'Wuthering Waves' } });
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        
	      {/* Front Side */}
        <div className="card-front" style={{ backgroundImage: `url(${character.image || 'default-image-url.jpg'})` }}>
          <button className="theme-toggle-btn" onClick={toggleFavorite}> {isFavorite ? '❤️' : '🤍'} </button>
          <div className="card-content">
            <h2>{character.name}</h2>
            <p><strong>Attribute:</strong> {character.attribute}</p>
            <p><strong>Region:</strong> {character.region}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="card-content">
            <h3>More About {character.name}</h3>
            <p>Rarity: {character.rarity}</p>
            <p>Weapon: {character.weapon}</p>
            <p>Version: {character.version}</p>
            <p>Faction: {character.faction}</p>
            <p>{character.description}</p>
            <button className="teleport-btn" onClick={handleViewTalent}>View Talents ➜</button>
          </div>
        </div>

      </div>
    </div>
  );
};
