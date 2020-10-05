import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel } from '../index.jsx'
import styles from './Dashboard.module.scss'

export default function Dashboard({ user }) {
  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        
      </div>
    </div>
  )
}
