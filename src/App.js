import {useState} from 'react';

import './App.css'

import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

function App() {

  const [appDark, setAppDark] = useState(true);

  const toggleDark = () => {
    setAppDark(!appDark);
  }

  return (
    <div className={appDark? "App-dark" : "App"}>
        <div className="AppGlass">
            <Sidebar></Sidebar>
            <MainDash></MainDash>
            <RightSide toggle={appDark} onToggle={toggleDark}></RightSide>
        </div>
    </div>
  );
}

export default App;
