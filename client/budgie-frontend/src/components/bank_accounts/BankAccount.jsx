import React from 'react'
import { Chart, AccountTable } from '../index.jsx'
import styles from './BankAccount.module.scss'

export default function BankAccount({account, accountData}) {
  return (
    <div>
      {account && accountData && <Chart account={account} accountData={accountData}/>}
        {account && (
          <div className={styles.accountOverviewContainer}>
            <h4>{account.name}</h4>
            <AccountTable accountData={accountData} />
          </div>
        )}
    </div>
  )
}
