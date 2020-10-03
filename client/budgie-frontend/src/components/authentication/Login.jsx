import React, { useState } from 'react'
import styles from './Authentication.module.scss'
import axios from 'axios'

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''})
  const [loginErrorMessage, setLoginErrorMessage] = useState(null)
  const [errorStyle, setErrorStyle] = useState({display: 'none'})
  const submitForm = (e) => {
    axios.post('http://localhost:8000/login/', loginCredentials)
    .then((response) => {
      console.log('login successful', response)
    })
    .catch((error) => {
      console.log('login failed', error)
      showErrorMessage()
    })
    e.preventDefault()
    console.log('form submitted', loginCredentials)
  }

  const handleOnChange = (e) => {
    setLoginCredentials({...loginCredentials, [e.target.name]: e.target.value})
    console.log('Handeling on change', loginCredentials)
  }

  const showErrorMessage = () => {
    console.log('hello from inside error message')
    setLoginErrorMessage("We didnt recognise your email or password")
    setErrorStyle({display: 'block'})
    setTimeout(() => {
      setErrorStyle({display: 'none'})
    }, 3000)
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <h2>Welcome back</h2>
        <h2>Login</h2>
        <form action="POST" onSubmit={submitForm}>
          <label>Username:</label> <br/>
          <input type="text" name="username" onChange={handleOnChange} value={loginCredentials.username}/> <br/>
          <label>Password:</label> <br/>
          <input type="password" name="password" onChange={handleOnChange} value={loginCredentials.password}/> <br/>
          <input type="submit"/>
        </form>
        <p className={styles.errorMessage} style={errorStyle}>{loginErrorMessage}</p>
      </div>
      <div className={styles.stripe} />
    </>
  )
}
