import React, { useState } from 'react'
import styles from './Authentication.module.scss'

export default function Register() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '', 
    password: '',
    password_confirmation: ''
  })

  const submitForm = (e) => {
    e.preventDefault()
    console.log('register submitted', user)
  }

  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log('Handeling on change', user)
  }

  return (
    <>
      <div className={styles.registerContainer}>
        <h2>Register here!</h2>
        <form action="POST" onSubmit={submitForm}>
          <label>First Name</label> <br/>
          <input type="text" name="firstname" onChange={handleOnChange} value={user.firstname}/><br/>
          <label>Last Name</label><br/>
          <input type="text" name="lastname" onChange={handleOnChange} value={user.lastname}/><br/>
          <label>Email</label><br/>
          <input type="email" name="email" onChange={handleOnChange} value={user.email}/><br/>
          <label>Username</label><br/>
          <input type="text" name="username" onChange={handleOnChange} value={user.username}/><br/>
          <label>Password</label><br/>
          <input type="password" name="password" onChange={handleOnChange} value={user.password}/><br/>
          <label>Confirm your password</label><br/>
          <input type="password" name="password_confirmation" onChange={handleOnChange} value={user.password_confirmation}/><br/>
          <input type="submit"/>
        </form>
      </div>
      <div className={styles.stripe} />
    </>
  )
}

