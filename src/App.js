
import './App.css';
import Voiture from './Composants/Voiture';
import Maison from './Composants/Maison';
// import Fullname from './Composants/Fullname';
// import Hobbies from './Composants/Hobbies';
import Players from './Composants/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Composants/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Composants/Home';
import Person from './Composants/Person'


function App() {
  return (
    <BrowserRouter> 
      
      <NavBar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/voiture' element={<Voiture/>}/> 
        <Route path='/person' element={<Person/>}/>
        <Route path='/maison' element={<Maison/>}/> 
        <Route path='/jeu' element={<Players/>}/>
      </Routes>





    </BrowserRouter>
    
  );
}


export default App;
