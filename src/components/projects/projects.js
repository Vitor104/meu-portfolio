import React from "react";
import styles from './projects.module.css';
import { Link } from "react-router-dom";

function Projects () {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
                <h2>Projetos</h2>
            </div>
        
            <div className={styles.projectsGrid}>
                
                <section className={styles.projectsWindow}>
                    <h3>FlowBill</h3>
                    <Link to="https://flowbill.netlify.app/" target="_blank" className={styles.button}>
                        Ver projeto
                    </Link>
                </section>

                <section className={styles.projectsWindow}>
                    <h3>Jammming</h3>
                    <Link to="https://reactmusicappjam.netlify.app/" target="_blank" className={styles.button}>
                        Ver projeto
                    </Link>
                </section>

                <section className={styles.projectsWindow}>
                    <h3>Sky Cast</h3>
                    <Link to="https://skycastdaily.netlify.app/" target="_blank" className={styles.button}>
                        Ver projeto
                    </Link>
                </section>

            </div>
        </div>
    )
}   

export default Projects;