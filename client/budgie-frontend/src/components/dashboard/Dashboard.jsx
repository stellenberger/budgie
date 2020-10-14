import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel, Chart } from '../index.jsx'
import styles from './Dashboard.module.scss'
import axios from 'axios'


export default function Dashboard({ user }) {
  const [account, setAccount] = useState(null)
  const [accountData, setaccountData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/bank-accounts/detail/3/')
    .then((response) => {
      console.log('successful response', response)
      setaccountData(response.data[0])
      setAccount(response.data[1])
    })
    .catch((error) => {
      console.log('something went wrong: ', error)
    })
  }, [])

  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        <h3>This is your Dashboard, where you can find an overview of your spendings over the last few days</h3>
        <h2>Each of your accounts, graphed by date</h2>
        {account && accountData && <Chart account={account} accountData={accountData}/>}
        {account && (
          <div className={styles.accountOverviewContainer}>
            <h4>{account.name}</h4>
            <table>
              <thead>
                {accountData.map((line) => {
                  return <tr key={line[0]}>{line.map((item) => <th key={item}>{item}</th>)}</tr>
                })}
              </thead>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
