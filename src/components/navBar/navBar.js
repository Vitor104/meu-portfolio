
/*

import React from "react";
import styles from './navBar.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from "../projects/projects";
import Home from "../home/home";


function NavBar () {
    return (
        <nav className={styles.nav}>
        <Router>
            
                <Route exact path="/" component={Home} />
                <Route path="/projetos" component={Projects} />
                
            
        </Router>







        
            
        </nav>
    )
}


export default NavBar;

/*
<NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Inicio</NavLink>

            <NavLink className={styles.textNav}  activeClassName='teste' to={}>Projetos</NavLink>

            <NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Skills</NavLink>


*/