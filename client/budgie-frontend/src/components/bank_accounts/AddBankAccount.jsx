import React, { useState } from 'react'
import { NavPanel } from '../index'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import styles from './AddBankAccount.module.scss'
import { baseURL, accountEndpoint } from '../../constants'
import axios from 'axios'

export default function AddBankAccount({ user }) {
  const [bankAccountName, setBankAccountName] = useState('')
  const [bankAccountFile, setBankAccountFile] = useState(null)
  const [bankAccountUserId, setBankAccountUserId] = useState(1)
  let history = useHistory()

  const submitForm = (e) => {
    let uploadData = new FormData()
    uploadData.append('name', bankAccountName)
    uploadData.append('records', bankAccountFile, bankAccountFile.name)
    uploadData.append('user_id', bankAccountUserId)
    console.log(uploadData)
    axios.post(baseURL + '/bank-accounts/create/', uploadData)
    .then((response) => {
      console.log('bank account successfully added to database', response.data)
      history.push('/dashboard')
    })
    .catch((error) => {
      console.log('something went wrong', error)
    })
    e.preventDefault()
    console.log('form submitted', bankAccountFile)
  }

  const handleOnChange = (e) => {
    setBankAccountName(e.target.value)
    console.log('Handeling on change', bankAccountName)
  }

  const handleOnChangeFile = (e) => {
    setBankAccountFile(e.target.files[0])
    console.log('Handeling on change', bankAccountFile)
  }


  return (
    <div className={styles.container}>
      { !user && <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        { user && <h1 className={styles.welcomeMessage}>Welcome back, {user.username}!</h1> }
        <h3>To add new cards or bank accounts, fill in the following form to get an overview of your spendings</h3>
          <form action="POST" onSubmit={submitForm}>
          <label>Bank Account Name:</label> <br/>
          <input type="text" name="name" onChange={handleOnChange} value={bankAccountName}/> <br/>
          <label>Upload your statement in CSV format:</label> <br/>
          <input type="file" name="records" onChange={handleOnChangeFile}/> <br/>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}
