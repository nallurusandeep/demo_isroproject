import './App.css';
import {Header} from './components/Header/Header.js';

import { LaunchList } from './components/LaunchApiList/LaunchList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/> 
      <LaunchList/>
      </header>
    </div>
  );
}

export default App;
