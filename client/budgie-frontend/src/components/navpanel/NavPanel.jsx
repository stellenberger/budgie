import React, { useState, useEffect } from 'react'
import styles from './NavPanel.module.scss'
import { Link } from 'react-router-dom'


export default function NavPanel({ user }) {
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if(user) {
      return
    } else {
      setErrorMessage('Sorry, you need to be logged in to see the navbar')
    }
  }, [])
  return (
    <>
      {
        user ? (
          <div className={styles.container}>
            <h2>{user.username}</h2>
            <ul>
              <li><Link to='/dashboard'>Home</Link></li>
              <li><Link to='/statistics'>Statistics</Link></li>
              <li><Link to='/add_bank_account'>Add new card</Link></li>
              <li><Link to='/'>Account</Link></li>
              <li><Link to='/'>About this app</Link></li>
            </ul>  
          </div>
        ) : (
          <h2>{ errorMessage }</h2>
        )
      }
        
    </>
  )
}
