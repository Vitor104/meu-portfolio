import React from "react";
import styles from './home.module.css';
import NavBar from "../navBar/navBar";
import githubIcon from './githubIcon.png';
import linkedinLogo from './logoLinkedin.png';
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className={styles.homeContainer}>
            <nav>
                <NavBar />
            </nav>
            
           <main className={styles.main}>
                <section>
                    <article className={styles.nameAndRole}>
                        <h1 className={styles.myName}>João <br></br>  Vitor</h1>
                        <h2 className={styles.myRole}>Desenvolvedor Front-End</h2>
                    </article>
                    
                </section>

                <section className={styles.aboutMeSection}>
                    <h2>Sobre mim</h2>
                    <p className={styles.aboutMe}>
                    Olá! Sou um desenvolvedor front-end apaixonado e dedicado, gosto de transformar problemas complexos em designs simples, bonitos e intuitivos. Estou sempre aprendendo e me mantendo atualizado com as últimas tendências. Atualmente, estou em busca da minha primeira oportunidade na área, onde eu possa contribuir com minhas habilidades e crescer como desenvolvedor. Sinta-se à vontade para conferir meu portfólio e entrar em contato comigo. Estou ansioso pela possibilidade de trabalharmos juntos!
                    </p>
                </section>
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
/*
<p className={styles.paragraphs}>Olá! Meu nome é </p>
<div className={styles.nameAndRole}>
<h1 className={styles.myName}>João Vitor</h1>
</div>
<p className={styles.paragraphs}>e eu sou</p>
<div className={styles.nameAndRole}> 
<h2 className={styles.myRole}>desenvolvedor Front-End</h2>
</div>*/