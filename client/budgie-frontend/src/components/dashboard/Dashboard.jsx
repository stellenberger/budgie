import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel, BankAccount } from '../index.jsx'
import styles from './Dashboard.module.scss'
import axios from 'axios'
import { baseURL, bankAccountEndpointAll } from '../../constants'


export default function Dashboard({ user }) {
  const [accounts, setAccounts] = useState([])
  const [totalExpenditure, setTotalExpenditure] = useState(21)
  useEffect(() => {
    axios.get(baseURL + bankAccountEndpointAll + '1/')
    .then((response) => {
      console.log('successful response', response.data)
      setAccounts(response.data)
    })
    .catch((error) => {
      console.log('something went wrong: ', error)
    })
  }, [])
  let expenditure = 0
  useEffect(() => {
    accounts.map(account => {
      for(let i = 1; i < account[0].length; i++) {
        if(account[0][i][5].length !== 0) {
          expenditure += parseInt(account[0][i][5])
        }
      }
    })
    setTotalExpenditure(expenditure)
  }, [accounts])


  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        <h3>This is your Dashboard, where you can find an overview of your spendings over the last few days</h3>
        <p>You have spent £{totalExpenditure} over {accounts.length} accounts this month</p>
        <p>This month, you have an average spend of £{totalExpenditure / 30} per day</p>
        <h2>Each of your accounts, graphed by date</h2>
        {accounts && accounts.map(account => {
          return <BankAccount account={account[1]} accountData={account[0]} />
        })}
      </div>
    </div>
  )
}
