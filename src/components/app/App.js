import {  Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from '../navBar/navBar';
import Home from '../home/home';
import Root from '../root/root';
import Projects from '../projects/projects';

function App() {
  return (


    
    <div className={styles.appContainer}>
      <NavBar />
       
      <Routes>
        <Route exact path='/' element={ <Root />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Projects" element={<Projects />} />
      </Routes>
      
    </div>
       
   
    

  );
}

export default App;
/*

<nav className={styles.nav}>
            <NavLink 
              className={styles.textNav} 
              activeClassName={styles.active} 
              to={'/Home'}>
                Inicio
            </NavLink>

            <NavLink 
              className={styles.textNav}
              activeClassName={styles.active} 
              to={'Projects'}>
                Projetos
            </NavLink>

            <NavLink className={styles.textNav} to={'/Home'}>Skills</NavLink>
        </nav>

*/