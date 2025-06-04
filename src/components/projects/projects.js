import React from "react";
import styles from './projects.module.css';
import { Link } from "react-router-dom";

function Projects () {

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
                <h2>Projetos</h2>
            </div>
        
            <section className={styles.projectsWindow}>
                <h3>Couro Rico (em andamento)</h3>
                <Link to="https://couro-rico.netlify.app/" className={styles.button}>
                    Ver mais
                </Link>
            </section>

            <section className={styles.projectsWindow}>
                <h3>Calculator</h3>
                <Link to="https://vitor104.github.io/calculator/" className={styles.button}>
                    Ver mais
                </Link>
            </section>

            <section className={styles.projectsWindow}>
                <h3>Jammming</h3>
                <Link to="https://reactmusicappjam.netlify.app/" className={styles.button}>
                    Ver mais
                </Link>
            </section>

            <section className={styles.projectsWindow}>
                <h3>Sky Cast</h3>
                <Link to="https://skycastdaily.netlify.app/" className={styles.button}>
                    Ver mais
                </Link>
            </section>
            
        </div>
    )
}   



export default Projects;