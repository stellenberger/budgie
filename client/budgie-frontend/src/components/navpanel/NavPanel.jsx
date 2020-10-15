import React from 'react'
import styles from './NavPanel.module.scss'
import { Link } from 'react-router-dom'

export default function NavPanel({ user }) {
  return (
    <div className={styles.container}>
        <h2>{user.username}</h2>
      <ul>
        <li><Link to='/'>Statistics</Link></li>
        <li><Link to='/bank_account'>Add new card</Link></li>
        <li><Link to='/'>Account</Link></li>
        <li><Link to='/'>About this app</Link></li>
      </ul>
    </div>
  )
}
