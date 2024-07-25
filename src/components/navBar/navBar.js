import React from "react";
import styles from './navBar.module.css';
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.textNav} to={'/Home'}>Home</NavLink>

            <NavLink className={styles.textNav} to={'/Home'}>Projects</NavLink>

            <NavLink className={styles.textNav} to={'/Home'}>Skills</NavLink>
        </nav>
    )
}


export default NavBar;