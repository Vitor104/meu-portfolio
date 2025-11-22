import React from "react";
import styles from './home.module.css';
import githubIcon from './githubIcon.png';
import linkedinLogo from './logoLinkedin.png';
import brazil from './brazil-.png';
import franca from './france.png'; 
import ingles from './united-kingdom.png';
import esperanto from './esperanto.png';


function Home() {
    return (
        <div className={styles.homeContainer}>
            
            <section className={styles.hero}>
                <h1 className={styles.myName}>João Vitor</h1>
                <h2 className={styles.myRole}>Desenvolvedor Front-End</h2>
                <div style={{marginTop: '2rem'}}>
                    <a href="/curriculo.pdf" download className="btn-neon">
                        Download CV
                    </a>
                </div>
            </section>

            <div className={styles.bentoGrid}>
                

                <article className={styles.card}>
                    <h2>Sobre mim</h2>
                    <p className={styles.aboutText}>
                        Transformo problemas complexos em designs simples e intuitivos. 
                        Estudante de ADS na Unifacisa, apaixonado por React e o ecossistema Front-End.
                        Sempre em busca da próxima tecnologia para dominar.
                    </p>
                </article>

                <article className={styles.card}>
                    <h2>Idiomas</h2>
                    <div className={styles.langGrid}>
                        <div className={styles.langItem}>
                            <img src={brazil} alt="PT-BR" className={styles.flagIcon} /> 
                            <span>Nativo</span>
                        </div>
                        <div className={styles.langItem}>
                            <img src={ingles} alt="EN" className={styles.flagIcon} /> 
                            <span>Inglês (C1)</span>
                        </div>
                        <div className={styles.langItem}>
                            <img src={franca} alt="FR" className={styles.flagIcon} /> 
                            <span>Francês (B1)</span>
                        </div>
                        <div className={styles.langItem}>
                            <img src={esperanto} alt="ES" className={styles.flagIcon} /> 
                            <span>Esperanto (A2)</span>
                        </div>
                    </div>
                </article>

                <article className={styles.card} style={{display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center'}}>
                    <a href='https://github.com/Vitor104' target="_blank" rel="noreferrer">
                        <img className={styles.socialGithub} src={githubIcon} alt="Github" style={{filter: 'invert(1)'}} width="50" />
                    </a>
                    <a href='https://www.linkedin.com/in/jvvitor' target="_blank" rel="noreferrer">
                        <img className={styles.socialIn} src={linkedinLogo} alt="Linkedin" width="50"/>
                    </a>
                </article>

            </div>
        </div>
    )
}

export default Home;