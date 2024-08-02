import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Home from '../home/home';
import Root from '../root/root';
import Projects from '../projects/projects';

function App() {
  return (


    
    <div className={styles.appContainer}>
      
       <nav className={styles.nav}>
            <NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Inicio</NavLink>

            <NavLink className={styles.textNav}  activeClassName='teste' to={'Projects'}>Projetos</NavLink>

            <NavLink className={styles.textNav} activeClassName='teste' to={'/Home'}>Skills</NavLink>
        </nav>
      <Routes>
        <Route path='/' element={ <Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      
    </div>
       
   
    

  );
}

export default App;
