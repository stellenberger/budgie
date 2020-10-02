import React, { useState } from 'react'
import styles from './Authentication.module.scss'

export default function Register() {
  const [registerUser, setRegisterUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '', 
    password: '',
    password_confirmation: ''
  })

  const submitForm = (e) => {
    e.preventDefault()
    console.log('register submitted', registerUser)
  }

  const handleOnChange = (e) => {
    setRegisterUser({...registerUser, [e.target.name]: e.target.value})
    console.log('Handeling on change', registerUser)
  }

  return (
    <>
      <div className={styles.registerContainer}>
        <h2>Register here!</h2>
        <form action="POST" onSubmit={submitForm}>
          <label>First Name</label> <br/>
          <input type="text" name="firstname" onChange={handleOnChange} value={registerUser.firstname}/><br/>
          <label>Last Name</label><br/>
          <input type="text" name="lastname" onChange={handleOnChange} value={registerUser.lastname}/><br/>
          <label>Email</label><br/>
          <input type="email" name="email" onChange={handleOnChange} value={registerUser.email}/><br/>
          <label>Username</label><br/>
          <input type="text" name="username" onChange={handleOnChange} value={registerUser.username}/><br/>
          <label>Password</label><br/>
          <input type="password" name="password" onChange={handleOnChange} value={registerUser.password}/><br/>
          <label>Confirm your password</label><br/>
          <input type="password" name="password_confirmation" onChange={handleOnChange} value={registerUser.password_confirmation}/><br/>
          <input type="submit"/>
        </form>
      </div>
      <div className={styles.stripe} />
    </>
  )
}

