import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import { Landing } from './components'

function App() {
  return (
    <div className="App">
      This is the app component
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Landing} />
          <Route exact path='/statistics' component={Landing} />
          <Route exact path='/account/:id' component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
