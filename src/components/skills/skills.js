import React from "react";
import styles from './skills.module.css';

const skillsData = [
    { name: "React", level: "80%" },
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "REST API", level: "40%" },
    { name: "Redux", level: "30%" },
    { name: "UI/UX", level: "80%" }
];

function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h2 className={styles.title}>Habilidades</h2>
            <div className={styles.grid}>
                {skillsData.map((skill) => (
                    <div key={skill.name} className={styles.skillCard}>
                        <div className={styles.skillHeader}>
                            <span>{skill.name}</span>
                            <span>{skill.level}</span>
                        </div>
                        <div className={styles.progressBarBg}>
                            <div 
                                className={styles.progressBarFill} 
                                style={{width: skill.level}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;