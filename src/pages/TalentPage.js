import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./talent.module.css";

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

const App = () => {
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [activeConstellation, setActiveConstellation] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Character Details</h1>
      <div className={styles.sections}>
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
    </div>
  );
};

export default App;
