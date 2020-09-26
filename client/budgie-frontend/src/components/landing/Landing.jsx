import React from 'react'
import styles from './Landing.module.scss'
import { Logo } from '../../media'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <img src={Logo} alt="budgie logo"/>
      <div className={styles.landingIntro}>
        <p>Welcome to budgie, the smart budgeting app to manage your spendings</p>
      </div>
    </div>
  )
}

export default Landing