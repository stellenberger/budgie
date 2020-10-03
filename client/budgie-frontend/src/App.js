import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import { 
  Landing, 
  Dashboard, 
  Statistics, 
  Account, 
  NavPanel, 
  Login, 
  Register, 
  ErrorPage404 } from './components'

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    // check if user session is active
  }, [])
  return (
    <div className="App">
      { user ? <NavPanel /> : null }
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Landing user={user} setUser={setUser}/>} />
          <Route exact path='/login' render={(props) => <Login user={user} setUser={setUser}/>} />
          <Route exact path='/register' render={(props) => <Register user={user} setUser={setUser}/>} />
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
