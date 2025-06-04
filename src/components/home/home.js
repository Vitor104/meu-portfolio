import React, {useState} from "react";
import styles from './home.module.css';
import githubIcon from './githubIcon.png';
import linkedinLogo from './logoLinkedin.png';
import arrowDown from './arrow-down.svg';
import arrowUp from './arrow-up.svg';
import { Link } from "react-router-dom";
import brazil from './brazil-.png';
import franca from './france.png';
import esperanto from './esperanto.png';
import ingles from './united-kingdom.png';




function Home () {

    const [tggAbout, setTggAbout] = useState(false);
    const [tggLang, setTggLang] = useState(false);

    const toggleAbout = () => {
        setTggAbout(!tggAbout);
    }
    
    const toggleLanguage = () => {
        setTggLang(!tggLang);
    }

    return (
        <div className={styles.homeContainer}>            
           <main className={styles.main}>
                <section>
                    <article className={styles.nameAndRole}>
                        <h1 className={styles.myName}>João <br></br>  Vitor</h1>
                        <h2 className={styles.myRole}>Desenvolvedor Front-End</h2>
                        <a href="/curriculo.pdf" download>
                            <button type="button" className={styles.curriculoDownload}>Baixar currículo (PDF)</button>
                        </a>
                    </article>
                    
                </section>

                <div className={styles.containerOfAll}>

                <section className={styles.aboutMeContainer}>
                   <div className={styles.aboutTitleAndBttn}>
                        <h2>Sobre mim</h2>
                        <button onClick={toggleAbout} className={styles.showAbout}>
                            <img className={styles.arrow} src={tggAbout ? arrowUp : arrowDown} alt="Bootstrap" width="30" height="30" />
                        </button>
                    </div>
                   

                    {tggAbout ?
                        <p className={styles.aboutMe}>
                        Olá! Sou um desenvolvedor apaixonado e dedicado, gosto de transformar problemas complexos em designs simples, bonitos e intuitivos. Estou sempre aprendendo e me mantendo atualizado com as últimas tendências. Atualmente, estou estudando ADS na Unifacisa, onde posso melhorar ainda mais minhas qualidades e explorar outras que, até então, eram desconhecidas.
                    </p>
                         :
                         <></>
                            }


                        
                    
                </section>

                <section className={styles.languagesContainer}>
                    <div className={styles.langTitleAndBttn}>
                        <h2>Idiomas</h2>
                        <button onClick={toggleLanguage} className={styles.showLang}>
                            <img className={styles.arrow} src={tggLang ? arrowUp : arrowDown} alt="Bootstrap" width="30" height="30" />
                        </button>
                    </div>

                    {tggLang ?
                        <section className={styles.languages}>
                            <article>
                                <img className={styles.flags} src={brazil} alt="brazilian flag" />
                                <p className={styles.langLevel}>Nativo</p>
                            </article>

                            <article>
                                <img className={styles.flags} src={franca} alt="french flag"/>
                                <p className={styles.langLevel}>B1</p>
                            </article>

                            <article>
                                <img className={styles.flags} src={ingles} alt="united kingdom flag"/>
                                <p className={styles.langLevel}>C1</p>
                            </article>

                            <article>
                                <img className={styles.flags} src={esperanto} alt="esperanto flag"/>
                                <p className={styles.langLevel}>A2</p>
                            </article>
                        </section>
                         :
                         <></>
                            }      

                </section>

                </div>
           </main>

           <footer className={styles.footer}>
            
            <Link to='https://github.com/Vitor104'>
                <img className={styles.socialGithub} src={githubIcon} alt="my github" />
            </Link>
            <Link to='www.linkedin.com/in/jvvitor'>
                <img className={styles.socialIn} src={linkedinLogo} alt="my linkedin account" />
            </Link>
           </footer>
        </div>
    )
}


export default Home;
