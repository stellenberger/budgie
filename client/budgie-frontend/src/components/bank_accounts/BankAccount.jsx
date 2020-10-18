import React, { useState } from 'react' 
import { Chart, AccountTable } from '../index.jsx'
import styles from './BankAccount.module.scss'

export default function BankAccount({account, accountData}) {
  const [errorMessage, setErrorMessage] = useState('Sorry, but you dont have any accounts.')

  return (
    <div>
      {!account && !accountData && errorMessage}
      {account && accountData && <Chart account={account} accountData={accountData} />}
        {account && (
          <div className={styles.accountOverviewContainer}>
            <h4>{account.name}</h4>
            <AccountTable accountData={accountData} />
          </div>
        )}
    </div>
  )
}
