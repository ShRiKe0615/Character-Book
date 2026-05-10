// /*-------------------- Imports --------------------*/

// import React, { useEffect, useState } from 'react';
// import genshinCharacters from '../pages/Genshindata';
// import honkaiCharacters from '../pages/Honkaidata';
// import wutheringCharacters from '../pages/Wutheringdata';

// /*-------------------- Global Data --------------------*/

// const elementColors = {
// /*Genshin Impact Color*/
//     Anemo: "#A8E4A0",
//     Geo: "#FFD700",
//     Electro: "#8A2BE2",
//     Dendro: "#7CFC00",
//     Hydro: "#00BFFF",
//     Pyro: "#FF4500",
//     Cryo: "#00FFFF",
// /*Honkai Star Rail Color*/
//     Physical: "",
//     Fire: "",
//     Ice: "",
//     Wind: "",
//     Quantum: "",
//     Imaginary: "",
//     Lightning: "",
// /*Wuthering Wave Color*/
//     Spectro: "",
//     Havoc: "",
//     Aero: "",
//     Glacio: "",
//     Fusion: "",
//     //Electro: "#8A2BE2",
// };

// /*---------------------------------------------------*/

// const UtilityPage = () => {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorite characters from localStorage when component mounts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Remove character from favorites
//   const removeFromFavorites = (uniqueID) => {
//     const updatedFavorites = favorites.filter(fav => fav.name !== name); // Remove the character by name
//     setFavorites(updatedFavorites); // Update the local state to re-render the component
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage
//   };
//   return (
//     // <div className="section">
//     //     <h2>Your Favorite Characters</h2>
//     //     <div className="favorite-characters">
//     //         {favorites.length === 0 ? ( <p>No favorite characters yet!</p> ) : (
//     //         favorites.map((character, index) => (
//     //         <div key={index} className="favorite-item">
//     //             <div className="favorite-info">
//     //                 <h3>{character.name}</h3>
//     //                 <p><strong>Game:</strong> Genshin Impact</p>
//     //                 <p><strong>Element:</strong> {character.element}</p>
//     //             </div>
//     //         <button onClick={() => removeFromFavorites(character.name)}> ❌ Remove from Favorites </button>
//     //         </div> )) )}
//     //     </div>
//     // </div>
//     <div className="section">

//     <h2>Your Favorite Characters</h2>
//     <div className="favorite-characters-container">

//         {/* Genshin Impact Section */}
//         <div className="favorite-game-section">
//             <h3>Genshin Impact</h3>
//             {/* {favorites.filter((character) => character.gameId === 1).length === 0 ? (
//                 <p>No favorite characters yet!</p>
//             ) : (
//                 favorites
//                     .filter((character) => character.gameId === 1)
//                     .map((character, index) => (
//                         <div key={index} className="favorite-item">
//                             <div className="favorite-info">
//                                 <h4>{character.name}</h4>
//                                 <p><strong>Element:</strong> {character.element}</p>
//                             </div>
//                             <button onClick={() => removeFromFavorites(character.compositeKey)}>
//                                 ❌ Remove from Favorites
//                             </button>
//                         </div>
//                     ))
//             )} */}
//             {favorites.length === 0 ? ( <p>No favorite characters yet!</p> ) : (
//             favorites.map((character, index) => {
//             const bgColor = elementColors[character.element] || "#FFFFFF";
//             return(
//             <section key={index} className="favorite-item" style={{ backgroundColor: bgColor }}>
//                     <div className="favorite-info">
//                         <div style={{ width: '170px' }}>Name - {character.name}</div>
//                         <div>Element - {character.element}</div>
//                     </div>
//                     <button onClick={() => removeFromFavorites(character.name)}> ❌ </button>
//             </section> ); }) )}
//             {/*
//             abhi ke liye temporary isko baad me generalize fix krna hai
//             */}
//         </div>

//         {/* Honkai Star Rail Section */}
//         <div className="favorite-game-section">
//             <h3>Honkai Star Rail</h3>
//             {favorites.filter((character) => character.gameId === 2).length === 0 ? (
//                 <p>No favorite characters yet!</p>
//             ) : (
//                 favorites
//                     .filter((character) => character.gameId === 2)
//                     .map((character, index) => (
//                         <div key={index} className="favorite-item">
//                             <div className="favorite-info">
//                                 <h4>{character.name}</h4>
//                                 <p><strong>Element:</strong> {character.element}</p>
//                             </div>
//                             <button onClick={() => removeFromFavorites(character.compositeKey)}>
//                                 ❌ Remove from Favorites
//                             </button>
//                         </div>
//                     ))
//             )}
//         </div>

//         {/* WuWa Section */}
//         <div className="favorite-game-section">
//             <h3>WuWa</h3>
//             {favorites.filter((character) => character.gameId === 3).length === 0 ? (
//                 <p>No favorite characters yet!</p>
//             ) : (
//                 favorites
//                     .filter((character) => character.gameId === 3)
//                     .map((character, index) => (
//                         <div key={index} className="favorite-item">
//                             <div className="favorite-info">
//                                 <h4>{character.name}</h4>
//                                 <p><strong>Element:</strong> {character.element}</p>
//                             </div>
//                             <button onClick={() => removeFromFavorites(character.compositeKey)}>
//                                 ❌ Remove from Favorites
//                             </button>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     </div>

//   );
// };

// export default UtilityPage;

/*-------------------- Imports --------------------*/

import React, { useEffect, useState } from 'react';
import { GenshinCharacters } from '../pages/Genshindata';
import { HonkaiStarRailCharacters } from '../pages/Honkaidata';
import { WutheringWavesCharacters } from '../pages/Wutheringdata';

/*-------------------- Global Data --------------------*/

const elementColors = {
  // Genshin Impact Colors
  Anemo: "#A8E4A0",
  Geo: "#FFD700",
  Electro: "#8A2BE2",
  Dendro: "#7CFC00",
  Hydro: "#00BFFF",
  Pyro: "#FF4500",
  Cryo: "#00FFFF",
  // Honkai Star Rail Colors
  Physical: "#D3D3D3",
  Fire: "#FF6347",
  Ice: "#ADD8E6",
  Wind: "#98FB98",
  Quantum: "#9370DB",
  Imaginary: "#FFDAB9",
  Lightning: "#FFA500",
  // WuWa Colors
  Spectro: "#FF69B4",
  Havoc: "#DC143C",
  Aero: "#87CEEB",
  Glacio: "#4682B4",
  Fusion: "#DAA520",
};

/*-------------------- Utility Page code --------------------*/

const UtilityPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [note, setNote] = useState(() => { return localStorage.getItem('generalNote') || ''; });

  // To-Do State
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('farmingTodos')) || [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [todoGame, setTodoGame] = useState('Genshin');

  // Calculator State
  const [calcGame, setCalcGame] = useState('Genshin');
  const [currentEnergy, setCurrentEnergy] = useState('');
  const [capTime, setCapTime] = useState(null);

  const energyData = {
    'Genshin': { max: 200, rate: 8, name: 'Resin' },
    'HSR': { max: 240, rate: 6, name: 'Trailblaze Power' },
    'WuWa': { max: 240, rate: 6, name: 'Waveplates' }
  };

  // Loading notes from localStorage
  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    localStorage.setItem('generalNote', newNote);
  };

  // Loading favorite characters from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);
  
  // Remove character from favorites
  const removeFromFavorites = (uniqueID) => {
    const updatedFavorites = favorites.filter(fav => fav !== uniqueID);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Todos
  useEffect(() => {
    localStorage.setItem('farmingTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, game: todoGame }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Calculator
  const calculateEnergy = () => {
    const energy = parseInt(currentEnergy);
    if (isNaN(energy) || energy < 0) return;
    const { max, rate } = energyData[calcGame];
    if (energy >= max) {
      setCapTime("Already capped!");
      return;
    }
    const minutesNeeded = (max - energy) * rate;
    const completionDate = new Date(Date.now() + minutesNeeded * 60000);
    setCapTime(completionDate.toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
  };

  // Extracting character details using gameID and characterID
  const getCharacterDetails = (uniqueID) => {
    const gameID = uniqueID[0];
    const characterID = uniqueID.slice(1);
    let character = null
    switch (gameID) {
      case '1':
        character = GenshinCharacters[characterID];
        break;
      case '2':
        character = HonkaiStarRailCharacters[characterID];
        break;
      case '3':
        character = WutheringWavesCharacters[characterID];
        break;
      default:
        return null;
    }
    // Treating all game element variable as one element variable 
    if (!character) return null;
    return {
      ...character, element: character.element || character.type || character.attribute || 'Unknown',
    }
  };

  // Groupping favorites by gameID
  const groupedFavorites = favorites.reduce((acc, uniqueID) => {
    const gameID = uniqueID[0];
    if (!acc[gameID]) acc[gameID] = [];
    acc[gameID].push(uniqueID);
    return acc;
  }, {});

  const gameNames = { '1': 'Genshin Impact', '2': 'Honkai Star Rail', '3': 'WuWa' }; // game ID and NAME mapping

  return (
    <div className="section">
      <h2>Your Favorite Characters</h2>

      {/* Render sections dynamically for each game */}
      <div className="favorite-characters-container">
        {Object.entries(groupedFavorites).map(([gameID, gameFavorites]) => (
          <div key={gameID} className="favorite-game-section">
            <h3>{gameNames[gameID]}</h3>
            {gameFavorites.length === 0 ? (<p>No favorite characters yet!</p>) : (
              gameFavorites.map(uniqueID => {
                const character = getCharacterDetails(uniqueID);
                if (!character) return null;
                const bgColor = elementColors[character.element] || "#FFFFFF";
                return (
                  <section key={uniqueID} className="favorite-item" style={{ backgroundColor: bgColor }}>
                    <div className="favorite-info">
                      <div style={{ width: '170px' }}>Name - {character.name}</div>
                      <div>Element - {character.element}</div>
                    </div>
                    <button onClick={() => removeFromFavorites(uniqueID)}>❌</button>
                  </section>
                );
              })
            )}
          </div>
        ))}
      </div>

      {/* Notes Section */}
      <div className="note-section">
        <h2>Your Personal Notes</h2>
        <textarea
          placeholder="Bring out your Creativity! Write your notes here..."
          value={note}
          onChange={handleNoteChange}
          rows={6} />
      </div>

      {/* Utilities Grid */ }
  <div className="utilities-grid">

    {/* Calculator Section */}
    <div className="calculator-section">
      <h2>Energy Calculator</h2>
      <div className="calc-controls">
        <select value={calcGame} onChange={(e) => { setCalcGame(e.target.value); setCapTime(null); setCurrentEnergy(''); }}>
          <option value="Genshin">Genshin Impact</option>
          <option value="HSR">Honkai: Star Rail</option>
          <option value="WuWa">Wuthering Waves</option>
        </select>
        <input
          type="number"
          placeholder={`Current ${energyData[calcGame].name}`}
          value={currentEnergy}
          onChange={(e) => setCurrentEnergy(e.target.value)}
          max={energyData[calcGame].max}
          min="0"
        />
        <button className="calc-btn" onClick={calculateEnergy}>Calculate Cap Time</button>
      </div>
      {capTime && (
        <div className="calc-result">
          <p>Full Cap ({energyData[calcGame].max}) Reached At:</p>
          <h3>{capTime}</h3>
        </div>
      )}
    </div>

    {/* To-Do Tracker Section */}
    <div className="todo-section">
      <h2>Daily Farming Tracker</h2>
      <div className="todo-input">
        <select value={todoGame} onChange={(e) => setTodoGame(e.target.value)}>
          <option value="Genshin">Genshin</option>
          <option value="HSR">HSR</option>
          <option value="WuWa">WuWa</option>
        </select>
        <input
          type="text"
          placeholder="E.g. Farm Talent Books..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? <p className="no-todos">No tasks added yet!</p> : (
          todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={`todo-game-tag ${todo.game.toLowerCase()}`}>{todo.game}</span>
              <span className="todo-text">{todo.text}</span>
              <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>❌</button>
            </div>
          ))
        )}
      </div>
    </div>

  </div>

    </div >
  );
};

export default UtilityPage;