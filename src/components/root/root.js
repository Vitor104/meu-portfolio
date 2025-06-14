import React from "react";
import styles from './root.module.css';
import { Link } from "react-router-dom";


function Root () {
    return (
        <div className={styles.introContainer}>
        <section>
            <h1 className={styles.titleName}>Vitor's</h1>
            <h2 className={styles.title}>Portfolio</h2>
        </section>
        
        <section className={styles.botoes}>

            <Link className={styles.button} to={'./Home'}>
                Enter
            </Link>

            <a href="/curriculo.pdf" download>
                <button type="button" className={styles.curriculoDownload}>Baixar currículo (PDF)</button>
            </a>
            
        </section>
    </div>
    )
}


export default Root;

//<a href="./Home">
//<button className={styles.button} type="button">Enter</button>
//</a>