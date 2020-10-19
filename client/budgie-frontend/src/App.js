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
  ErrorPage404 
} from './components'
import axios from 'axios'
import { baseURL, bankAccountEndpointAll } from './constants'

function App() {
  const exampleUser = {id: 1, username: 'stephanellenberger', token: '123'} // This is for overriding redirects, and is not a real user
  const [ user, setUser ] = useState(null)
  const [accounts, setAccounts] = useState([])
  const [statistics, setStatistics] = useState({totalDifference: 0, totalExpenditure: 0, totalTransactions: 0})
  const [chartData, setChartData] = useState([])
  const [pieChartData, setPieChartData] = useState([])

  useEffect(() => {
    if (user) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${user.token}`
      }
      axios.get(baseURL + bankAccountEndpointAll, { headers: headers})
      .then((response) => {
        console.log('successful response', response.data)
        setAccounts(response.data.accounts)
        let newStatistics = {
          totalDifference: response.data.total_difference,
          totalExpenditure: response.data.total_expenditure,
          totalTransactions: response.data.total_transactions
        }
        setStatistics(newStatistics)
        setChartData(response.data.chart_data)
        setPieChartData(response.data.pie_chart_data)
      })
      .catch((error) => {
        console.log('something went wrong: ', error)
      })
    }
  }, [user])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Landing user={user} setUser={setUser}/>} />
          <Route exact path='/login' render={(props) => <Login user={user} setUser={setUser}/>} />
          <Route exact path='/register' render={(props) => <Register user={user} setUser={setUser}/>} />
          <Route exact path='/dashboard' render={(props) => <Dashboard user={user} accounts={accounts} statistics={statistics} chartData={chartData}/>} />
          <Route exact path='/statistics' render={(props) => <Statistics user={user} statistics={statistics} accounts={accounts} chartData={pieChartData}/>} />
          <Route exact path='/account/:id' render={(props) => <Account user={user}/>} />
          <Route exact path='/add_bank_account' render={(props) => <AddBankAccount user={user}/>} />
          <Route component={ErrorPage404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
