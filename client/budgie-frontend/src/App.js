import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import { Landing, Dashboard, Statistics, Account, NavPanel, ErrorPage404 } from './components'

function App() {
  const [ user, setUser ] = useState(true)

  useEffect(() => {
    // check if user session is active
  }, [])
  return (
    <div className="App">
      { user ? <NavPanel /> : null }
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Landing user={user}/>} />
          <Route exact path='/dashboard' render={(props) => <Dashboard user={user}/>} />
          <Route exact path='/statistics' render={(props) => <Statistics user={user}/>} />
          <Route exact path='/account/:id' render={(props) => <Account user={user}/>} />
          <Route component={ErrorPage404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
