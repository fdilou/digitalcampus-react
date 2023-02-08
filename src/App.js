
import './App.css';
import Voiture from './Composants/Voiture';
import Maison from './Composants/Maison';
import Fullname from './Composants/Fullname';
import Hobbies from './Composants/Hobbies';
import Players from './Composants/Player';



function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Voiture/>
          <Maison/>
          <Fullname/>
          <Hobbies/>
          <Players/>
        </li> 
      </ul> 

      
      
    </div>
  );
}


export default App;
