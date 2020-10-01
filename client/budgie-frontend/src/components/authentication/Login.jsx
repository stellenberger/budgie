import React, { useState } from 'react'

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
    <div>
      <form action="POST" onSubmit={submitForm}>
        <input type="text" name="username" onChange={handleOnChange} value={user.username}/>
        <input type="password" name="password" onChange={handleOnChange} value={user.password}/>
        <input type="submit"/>
      </form>
    </div>
  )
}
