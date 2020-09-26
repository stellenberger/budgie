import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
} from 'react-router-dom'
import { Landing, Dashboard, Statistics, Account, NavPanel } from './components'

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    // check if user session is active
  }, [])
  return (
    <div className="App">
      { user ? <NavPanel /> : null }
      <Router>
      { user ? <Redirect to='/dashboard' /> : null }
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
