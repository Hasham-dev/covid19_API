import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import InfoPanel from './Components/InfoPanel'
import FootNav from './Components/FootNav';

function App() {
  const screenCofig = useState(0);

  return (
    <div>
     <NavBar />
     <InfoPanel  currentScreen={screenCofig[0]}/>
     <FootNav screenCofig={screenCofig}/>
    </div>
  );
}

export default App;
