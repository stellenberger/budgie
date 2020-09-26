import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import { Landing, Dashboard, Statistics, Account, NavPanel } from './components'

function App() {
  return (
    <div className="App">
      <NavPanel />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/account/:id' component={Account} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
