import { Route, Routes, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Home from '../home/home';
import Root from '../root/root';

function App() {
  return (


    
    <div className={styles.appContainer}>
    
      <Routes>
        <Route path='/' element={ <Root />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </div>
       
   
  

  );
}

export default App;
