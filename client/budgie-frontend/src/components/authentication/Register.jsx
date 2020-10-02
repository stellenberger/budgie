import React, { useState } from 'react'
import styles from './Authentication.module.scss'

export default function Register() {
  const [loginUser, setLoginUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '', 
    password: '',
    password_confirmation: ''
  })

  const submitForm = (e) => {
    e.preventDefault()
    console.log('register submitted', loginUser)
  }

  const handleOnChange = (e) => {
    setLoginUser({...loginUser, [e.target.name]: e.target.value})
    console.log('Handeling on change', loginUser)
  }

  return (
    <>
      <div className={styles.registerContainer}>
        <h2>Register here!</h2>
        <form action="POST" onSubmit={submitForm}>
          <label>First Name</label> <br/>
          <input type="text" name="firstname" onChange={handleOnChange} value={loginUser.firstname}/><br/>
          <label>Last Name</label><br/>
          <input type="text" name="lastname" onChange={handleOnChange} value={loginUser.lastname}/><br/>
          <label>Email</label><br/>
          <input type="email" name="email" onChange={handleOnChange} value={loginUser.email}/><br/>
          <label>Username</label><br/>
          <input type="text" name="username" onChange={handleOnChange} value={loginUser.username}/><br/>
          <label>Password</label><br/>
          <input type="password" name="password" onChange={handleOnChange} value={loginUser.password}/><br/>
          <label>Confirm your password</label><br/>
          <input type="password" name="password_confirmation" onChange={handleOnChange} value={loginUser.password_confirmation}/><br/>
          <input type="submit"/>
        </form>
      </div>
      <div className={styles.stripe} />
    </>
  )
}

