import React from "react";
import styles from './home.module.css';
import NavBar from "../navBar/navBar";
import minhaFoto from './minhaFoto.jpg';
import githubIcon from './githubIcon.png';
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className={styles.homeContainer}>
            <nav>
                <NavBar />
            </nav>
            
           <main className={styles.main}>
                <section>
                    <article>
                        <img className={styles.picture} alt="minha foto" src={minhaFoto} />
                        <h1 className={styles.name}>João Vitor</h1>
                        <h2 className={styles.title}>Desenvolvedor Front-End</h2>
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
            
            <Link>
                <img className={styles.socials} src={githubIcon} alt="my github" />
            </Link>
           </footer>
        </div>
    )
}


export default Home;