import React from 'react'
import styles from './NavPanel.module.scss'
import { Link } from 'react-router-dom'

export default function NavPanel({ user }) {
  return (
    <div className={styles.container}>
      <ul>
        <li>{user.username}</li>
        <li><Link path='/'>Statistics</Link></li>
        <li><Link path='/'>Add new card</Link></li>
        <li><Link path='/'>Account</Link></li>
        <li><Link path='/'>About this app</Link></li>
      </ul>
    </div>
  )
}
