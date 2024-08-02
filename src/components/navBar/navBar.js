
import React from "react";
import styles from './navBar.module.css';
import { NavLink } from 'react-router-dom';


function NavBar () {
    return (
        <nav className={styles.nav}>
            <NavLink 
              className={styles.textNav} 
              activeClassName={styles.active} 
              to={'/Home'} exact>
                Inicio
            </NavLink>

            <NavLink 
              className={styles.textNav}
              activeClassName={styles.active} 
              to={'/Projects'} exact>
                Projetos
            </NavLink>

            <NavLink className={styles.textNav} to={'/Home'}>Skills</NavLink>
        </nav>

         
        
    )
}


export default NavBar;

