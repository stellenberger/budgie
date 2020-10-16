import React, { useState, useEffect } from 'react';
import './App.scss';
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
  AddBankAccount,
  ErrorPage404 } from './components'

function App() {
  const exampleUser = {id: 1, username: 'stephanellenberger', token: '123'} // This is for overriding redirects, and is not a real user
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    // check if user session is active
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Landing user={user} setUser={setUser}/>} />
          <Route exact path='/login' render={(props) => <Login user={user} setUser={setUser}/>} />
          <Route exact path='/register' render={(props) => <Register user={user} setUser={setUser}/>} />
          <Route exact path='/dashboard' render={(props) => <Dashboard user={user}/>} />
          <Route exact path='/statistics' render={(props) => <Statistics user={user}/>} />
          <Route exact path='/account/:id' render={(props) => <Account user={user}/>} />
          <Route exact path='/add_bank_account' render={(props) => <AddBankAccount user={user}/>} />
          <Route component={ErrorPage404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
