import {  Route, Routes, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from '../navBar/navBar';
import Home from '../home/home';
import Projects from '../projects/projects';
import Skills from '../skills/skills';

function App() {
  return (


    
    <div className={styles.appContainer}>
      <NavBar />
       
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </div>
       
   
    

  );
}

export default App;
