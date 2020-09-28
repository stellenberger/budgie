import React from 'react'
import styles from './Landing.module.scss'
import { Logo } from '../../media'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <span className={styles.logo}><img src={Logo} alt="budgie logo"/></span>
      <p className={styles.landingIntro}>Welcome to budgie, the smart budgeting app to manage your spendings</p>
      <div className={styles.authButtonsContainer}>
        <a href="#" className={styles.authButton}>Login</a>
        <a href="#" className={styles.authButton}>Register</a>
      </div>
    </div>
  )
}

export default Landing