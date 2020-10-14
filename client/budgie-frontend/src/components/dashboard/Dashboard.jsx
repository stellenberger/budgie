import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel } from '../index.jsx'
import styles from './Dashboard.module.scss'
import axios from 'axios'


export default function Dashboard({ user }) {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/bank-accounts/detail/3/')
    .then((response) => {
      console.log('successful response', response)
      setAccount(response)
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
        {account && (
          <div className={styles.accountOverviewContainer}>
            <h4>{account.data[1].name}</h4>
            {account.data[0].map((line) => {
              return <p>{line.map((item) => <span>{item}</span>)}</p>
            })}
          </div>
        )}
      </div>
    </div>
  )
}
