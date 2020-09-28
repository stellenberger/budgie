import React from 'react'
import styles from './Landing.module.scss'
import { Logo } from '../../media'
import { Redirect } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <div className={styles.landingContainer}>
    { user ? <Redirect to='/dashboard' /> : null }
      <div className={styles.contentContainer}>
      <span className={styles.logo}><img src={Logo} alt="budgie logo"/></span>
      <p className={styles.landingIntro}>Welcome to budgie, the smart budgeting app to manage your spendings</p>
      <div className={styles.authButtonsContainer}>
        <a href="/login" className={styles.authButton}>Login</a>
        <a href="/register" className={styles.authButton}>Register</a>
      </div>
      </div>
    </div>
  )
}

export default Landing