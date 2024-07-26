import React from "react";
import styles from './navBar.module.css';
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Inicio</NavLink>

            <NavLink className={styles.textNav}  activeClassName='teste' to={'/Home'}>Projetos</NavLink>

            <NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Skills</NavLink>
        </nav>
    )
}


export default NavBar;