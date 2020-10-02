import React, { useState } from 'react'
import styles from './Authentication.module.scss'

export default function Login() {
  const [user, setUser] = useState({username: '', password: ''})

  const submitForm = (e) => {
    e.preventDefault()
    console.log('form submitted', user)
  }

  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log('Handeling on change', user)
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <h2>Welcome back</h2>
        <h2>Login</h2>
        <form action="POST" onSubmit={submitForm}>
          <label>Username:</label> <br/>
          <input type="text" name="username" onChange={handleOnChange} value={user.username}/> <br/>
          <label>Password:</label> <br/>
          <input type="password" name="password" onChange={handleOnChange} value={user.password}/> <br/>
          <input type="submit"/>
        </form>
      </div>
      <div className={styles.stripe} />
    </>
  )
}
