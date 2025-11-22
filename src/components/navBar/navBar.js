
import React from "react";
import styles from './navBar.module.css';
import { NavLink } from 'react-router-dom';


function NavBar () {
    return (
        <nav className={styles.nav}>
            <NavLink 
              className={styles.textNav} 
              activeClassName={styles.active} 
              to={'/'} end>
                Inicio
            </NavLink>

            <NavLink 
              className={styles.textNav} 
              to={'/Projects'}>
                Projetos
            </NavLink>

            <NavLink 
            className={styles.textNav} 
            to={'/Skills'}>
              Skills
            </NavLink>
        </nav>

         
        
    )
}


export default NavBar;

