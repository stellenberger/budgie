import React, { useState } from 'react'

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
    <div>
      <form action="POST" onSubmit={submitForm}>
        <input type="text" name="firstname" onChange={handleOnChange} value={user.firstname}/>
        <input type="text" name="lastname" onChange={handleOnChange} value={user.lastname}/>
        <input type="email" name="email" onChange={handleOnChange} value={user.email}/>
        <input type="text" name="username" onChange={handleOnChange} value={user.username}/>
        <input type="password" name="password" onChange={handleOnChange} value={user.password}/>
        <input type="password" name="password_confirmation" onChange={handleOnChange} value={user.password_confirmation}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

