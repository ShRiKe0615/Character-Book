import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div style={{ marginBottom: "1rem", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12px", padding: "1rem" }}>
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
          <p style={{ margin: 0, color: "#aaa", fontSize: "1rem" }}>
            {character.game} • {character.element || character.type || character.attribute}
          </p>
        </div>
        <span style={{ marginLeft: "auto", fontSize: "1.5rem", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
          ▼
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.sections} style={{ marginTop: "2rem" }}>
              {/* Talent Section */}
              <div className={styles.talentSection}>
                <h2>Talents</h2>
                <div className={styles.talentGrid}>
                  {dummyTalents.map((talent) => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={styles.talentCard}
                      key={talent.id}
                      onClick={() => setSelectedTalent(talent)}
                    >
                      <span className={styles.icon}>{talent.icon}</span>
                      <p>{talent.name}</p>
                    </motion.div>
                  ))}
                </div>
                {selectedTalent && (
                  <motion.div
                    className={styles.talentDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3>{selectedTalent.name}</h3>
                    <p>{selectedTalent.description}</p>
                  </motion.div>
                )}
              </div>

              {/* Constellation Section */}
              <div className={styles.constellationSection}>
                <h2>Constellations</h2>
                <div className={styles.constellationSemiCircle}>
                  {dummyConstellations.map((c, index) => (
                    <motion.div
                      className={styles.constellationNode}
                      key={c.id}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      onClick={() => setActiveConstellation(c)}
                      style={{
                        transform: `rotate(${index * 30}deg) translate(140px) rotate(-${index * 30}deg)`,
                      }}
                    >
                      {c.icon}
                    </motion.div>
                  ))}
                </div>
                {activeConstellation && (
                  <motion.div
                    className={styles.constellationDetail}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3>{activeConstellation.title}</h3>
                    <p>{activeConstellation.description}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TalentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allCharacters = useMemo(() => {
    return [
      ...Object.values(GenshinCharacters).map(c => ({ ...c, game: 'Genshin Impact' })),
      ...Object.values(HonkaiStarRailCharacters).map(c => ({ ...c, game: 'Honkai Star Rail' })),
      ...Object.values(WutheringWavesCharacters).map(c => ({ ...c, game: 'Wuthering Waves' }))
    ];
  }, []);

  const filteredCharacters = useMemo(() => {
    return allCharacters.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.game.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allCharacters, searchTerm]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Characters Talents</h1>
      
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
         <input 
            type="text" 
            placeholder="Search characters or games..." 
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
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "#fff"
            }}
         />
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {filteredCharacters.map((char, index) => (
          <CharacterTalentCard key={`${char.name}-${index}`} character={char} />
        ))}
        {filteredCharacters.length === 0 && (
          <p style={{ textAlign: "center", color: "#aaa" }}>No characters found.</p>
        )}
      </div>
    </div>
  );
};

export default TalentPage;
