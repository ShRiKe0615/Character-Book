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

// Elements Icons
const ElementsIcons = {
  Pyro: "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Element_Pyro.png",
  Hydro: "https://static.wikia.nocookie.net/gensin-impact/images/3/35/Element_Hydro.png",
  Anemo: "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Element_Anemo.png",
  Electro: "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Electro.png",
  Dendro: "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Element_Dendro.png",
  Cryo: "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Element_Cryo.png",
  Geo: "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Element_Geo.png",
};

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
              <div className={styles.talentDetail}>
                <h3>PASSIVE</h3>
                <p>{character.passive}</p>
              </div>
            </div>

            {/* Constellation Section */}
            <div className={styles.constellationSection}>
              <h2 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "0.5rem" }}>Constellations</h2>
              <div className={styles.constellationMap}>
                <svg className={styles.constellationLines} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon
                    points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5"
                    fill="none"
                    stroke="rgba(100, 200, 255, 0.2)"
                    strokeWidth="0.5"
                  />
                </svg>

                <div className={styles.nodesWrapper}>
                  <div
                    className={styles.centerNode}
                    style={{ left: "50%", top: "50%" }}
                    title={`${character.name}'s Element`}
                  >
                    {/* {character.element || "N/A"} */}
                    <img
                      src={ElementsIcons[character.element] || "https://via.placeholder.com/60"}
                      alt={character.element || "N/A"}
                      style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", backgroundColor: "#292944" }}
                    />
                  </div>

                  {(character.constellations || dummyConstellations).map((c, index) => {
                    const positions = [
                      { x: 50, y: 15 },
                      { x: 85, y: 32.5 },
                      { x: 85, y: 67.5 },
                      { x: 50, y: 85 },
                      { x: 15, y: 67.5 },
                      { x: 15, y: 32.5 },
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
                        <span className={styles.starIcon}>C{index + 1}</span>
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
