import React from "react";
import styles from './home.module.css';
import NavBar from "../navBar/navBar";

function Home () {
    return (
        <div className={styles.homeContainer}>
            <nav>
                <NavBar />
            </nav>
            
            <p>
                fafafa
            </p>
        </div>
    )
}


export default Home;