import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel } from '../index.jsx'
import styles from './Dashboard.module.scss'

export default function Dashboard({ user }) {
  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        <h3>This is your Dashboard, where you can find an overview of your spendings over the last few days</h3>
      </div>
    </div>
  )
}
