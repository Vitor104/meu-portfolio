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
                <h3>Title</h3>
                <Link className={styles.button}>
                    Ver mais
                </Link>
            </section>

            <section className={styles.projectsWindow}>
                <h3>Title</h3>
                <Link className={styles.button}>
                    Ver mais
                </Link>
            </section>
        </div>
    )
}   



export default Projects;