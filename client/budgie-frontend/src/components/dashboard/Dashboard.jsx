import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel, BankAccount } from '../index.jsx'
import styles from './Dashboard.module.scss'


export default function Dashboard({ user, accounts, statistics }) {

  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        <h3>This is your Dashboard, where you can find an overview of your spendings over the last few days</h3>
        <p>You have spent £{statistics.totalExpenditure} over {accounts.length} accounts this month</p>
        <p>From the beginning to the end of the month, you have a total difference of £{statistics.totalDifference} over {accounts.length} accounts</p>
        <p>This month, you have an average spend of £{statistics.totalExpenditure / 30} per day</p>
        <h2>Each of your accounts, graphed by date</h2>
        {accounts && accounts.map(account => {
          return <BankAccount key={account[1].id} account={account[1]} accountData={account[0]} />
        })}
      </div>
    </div>
  )
}
