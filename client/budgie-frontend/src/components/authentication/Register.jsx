import React, { useState } from 'react'
import styles from './Authentication.module.scss'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function Register({ user, setUser }) {
  const [registerUser, setRegisterUser] = useState({
    username: '', 
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [registerErrorMessage, setRegisterErrorMessage] = useState(null)
  const [errorStyle, setErrorStyle] = useState({display: 'none'})
  let history = useHistory()

  const submitForm = (e) => {
    e.preventDefault()
    if(registerUser.password !== registerUser.password_confirmation) {
      showPasswordError()
    } else {
      axios.post('http://localhost:8000/register/', registerUser)
      .then((response) => {
        console.log('Registration successful', response)
        console.log(response.data.token)
        setUser({ username: registerUser.username, token: response.data.token })
        history.push('/dashboard')
      })
      .catch((error) => {
        console.log('there was a problem with the registration', error)
      })
      console.log('register submitted', registerUser)
    }
  }

  const handleOnChange = (e) => {
    setRegisterUser({...registerUser, [e.target.name]: e.target.value})
    console.log('Handeling on change', registerUser)
  }

  const showPasswordError = () => {
    console.log('hello from inside error message')
    setRegisterErrorMessage("Your passwords dont match")
    setErrorStyle({display: 'block'})
    setTimeout(() => {
      setErrorStyle({display: 'none'})
    }, 3000)
  }

  return (
    <>
      <div className={styles.registerContainer}>
        <h2>Register here!</h2>
        <form action="POST" onSubmit={submitForm}>
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
        <p className={styles.errorMessage} style={errorStyle}>{registerErrorMessage}</p>
      </div>
      <div className={styles.stripe} />
    </>
  )
}

