import './App.css';
import {Header} from './components/Header/Header.js';
import {LaunchView} from './components/LaunchView/LaunchView.js';
import { LaunchList } from './components/LaunchApiList/LaunchList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
   <Router>
     <Header/>
     <Switch>
      <Route path="/launch/:flight_number">
          <LaunchView/>
      </Route>
      <Route path="/">
      <LaunchList/>
      </Route>
      </Switch>
   </Router>
    </div>
  );
}

export default App;
