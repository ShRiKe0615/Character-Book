import React, { useState, useMemo } from "react";

import styles from "./talent.module.css";
import { GenshinCharacters } from "./Genshindata";
import { HonkaiStarRailCharacters } from "./Honkaidata";
import { WutheringWavesCharacters } from "./Wutheringdata";

// Dummy data for talents and constellations
const dummyTalents = [
  { id: 1, name: "Normal Attack", description: "Basic attack combo", icon: "🗡️" },
  { id: 2, name: "Elemental Skill", description: "Powerful ability", icon: "🔥" },
  { id: 3, name: "Elemental Burst", description: "Ultimate attack", icon: "💥" },
  { id: 4, name: "Passive 1", description: "Support passive", icon: "✨" },
  { id: 5, name: "Passive 2", description: "Another support", icon: "🌟" },
  { id: 6, name: "Utility", description: "Out-of-combat ability", icon: "🎯" },
];

const dummyConstellations = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Constellation ${i + 1}`,
  description: `Special bonus unlocked at constellation ${i + 1}`,
  icon: "🔷",
}));

const CharacterTalentCard = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [activeConstellation, setActiveConstellation] = useState(null);

  return (
    <div style={{ marginBottom: "1rem", backgroundColor: "rgba(128, 128, 128, 0.1)", borderRadius: "12px", padding: "1rem", border: "1px solid rgba(128, 128, 128, 0.2)", backdropFilter: "blur(5px)" }}>
      <div 
        style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "1.5rem" }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
           src={character.image || "https://via.placeholder.com/60"} 
           alt={character.name} 
           style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", backgroundColor: "#292944" }} 
        />
        <div>
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{character.name}</h2>
          <p style={{ margin: 0, opacity: 0.7, fontSize: "1rem" }}>
            {character.game} • {character.element || character.type || character.attribute}
          </p>
        </div>
        <span style={{ marginLeft: "auto", fontSize: "1.5rem", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
          ▼
        </span>
      </div>

        {isOpen && (
          <div style={{ overflow: "hidden" }}>
            <div className={styles.sections} style={{ marginTop: "2rem" }}>
              {/* Talent Section */}
              <div className={styles.talentSection}>
                <h2 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "0.5rem" }}>Talents</h2>
                <div className={styles.talentGrid}>
                  {(character.talents || dummyTalents).map((talent) => {
                    const isActive = selectedTalent?.id === talent.id;
                    return (
                      <div
                        className={`${styles.talentCard} ${isActive ? styles.active : ""}`}
                        key={talent.id}
                        onClick={() => setSelectedTalent(talent)}
                      >
                        <div className={styles.talentCardIconWrapper}>
                          {talent.icon}
                        </div>
                        <p>{talent.name}</p>
                      </div>
                    );
                  })}
                </div>
                {selectedTalent && (
                  <div className={styles.talentDetail}>
                    <h3>{selectedTalent.name}</h3>
                    <p>{selectedTalent.description}</p>
                  </div>
                )}
              </div>

              {/* Constellation Section */}
              <div className={styles.constellationSection}>
                <h2>Constellations</h2>
                <div className={styles.constellationMap}>
                  <svg className={styles.constellationLines}>
                    <polyline points="50,10 50,60 100,100 50,140 150,180 50,220" />
                  </svg>
                  
                  <div className={styles.nodesWrapper}>
                    {(character.constellations || dummyConstellations).map((c, index) => {
                      const positions = [
                        { x: 50, y: 15 },
                        { x: 20, y: 30 },
                        { x: 80, y: 45 },
                        { x: 25, y: 65 },
                        { x: 75, y: 80 },
                        { x: 50, y: 90 },
                      ];
                      const pos = positions[index] || { x: 50, y: 50 };
                      const isActive = activeConstellation?.id === c.id;
                      return (
                        <div
                          className={`${styles.constellationStar} ${isActive ? styles.active : ""}`}
                          key={c.id}
                          onClick={() => setActiveConstellation(c)}
                          style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                          }}
                        >
                          <span className={styles.starIcon}>{c.icon}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                  {activeConstellation && (
                    <div
                      key={activeConstellation.id}
                      className={styles.constellationDetail}
                    >
                      <h3>{activeConstellation.title}</h3>
                      <p>{activeConstellation.description}</p>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

const TalentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState("Genshin Impact");

  const games = ["Genshin Impact", "Honkai Star Rail", "Wuthering Waves"];

  const allCharacters = useMemo(() => {
    return [
      ...Object.values(GenshinCharacters).map(c => ({ ...c, game: 'Genshin Impact' })),
      ...Object.values(HonkaiStarRailCharacters).map(c => ({ ...c, game: 'Honkai Star Rail' })),
      ...Object.values(WutheringWavesCharacters).map(c => ({ ...c, game: 'Wuthering Waves' }))
    ];
  }, []);

  const filteredCharacters = useMemo(() => {
    return allCharacters.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGame = c.game === selectedGame;
      return matchesSearch && matchesGame;
    });
  }, [allCharacters, searchTerm, selectedGame]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Character Talents</h1>

      {/* Game Selector Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {games.map((game) => (
          <button
            key={game}
            onClick={() => setSelectedGame(game)}
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              color: selectedGame === game ? '#fff' : 'inherit',
              opacity: selectedGame === game ? 1 : 0.7,
              background: selectedGame === game ? 'linear-gradient(145deg, #2a3c5a, #1a253a)' : 'rgba(128, 128, 128, 0.1)',
              boxShadow: selectedGame === game ? '0 0 15px rgba(100, 200, 255, 0.3)' : 'none',
              border: selectedGame === game ? '1px solid rgba(100, 200, 255, 0.5)' : '1px solid transparent',
              transition: 'all 0.3s ease'
            }}
          >
            {game}
          </button>
        ))}
      </div>
      
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
         <input 
            type="text" 
            placeholder={`Search ${selectedGame} characters...`} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              padding: "0.8rem 1.5rem", 
              width: "80%", 
              maxWidth: "500px", 
              borderRadius: "20px", 
              border: "1px solid #444", 
              outline: "none",
              fontSize: "1.1rem",
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              color: "inherit",
              backdropFilter: "blur(5px)"
            }}
         />
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {filteredCharacters.map((char, index) => (
          <CharacterTalentCard key={`${char.name}-${index}`} character={char} />
        ))}
        {filteredCharacters.length === 0 && (
          <p style={{ textAlign: "center", opacity: 0.7 }}>No characters found for {selectedGame}.</p>
        )}
      </div>
    </div>
  );
};

export default TalentPage;
