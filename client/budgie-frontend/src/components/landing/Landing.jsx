import React from 'react'
import styles from './Landing.module.scss'
import { Logo } from '../../media'
import { Redirect, Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <div className={styles.landingContainer}>
    { user ? <Redirect to='/dashboard' /> : null }
      <div className={styles.contentContainer}>
      <span className={styles.logo}><img src={Logo} alt="budgie logo"/></span>
      <p className={styles.landingIntro}>Welcome to budgie, the smart budgeting app to manage your spendings</p>
      <div className={styles.authButtonsContainer}>
        <Link to='/login' className={styles.authButton}>Login</Link>
        <Link to='/register' className={styles.authButton}>Register</Link>
      </div>
      </div>
    </div>
  )
}

export default Landing