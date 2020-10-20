import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavPanel, PieChart } from '../../components'
import styles from './Statistics.module.scss'


export default function Statistics({ user, statistics, accounts, chartData }) {

  const upOrDown = () => {
    return statistics.totalDifference > 0 ? (<b>up</b>) : (<b>down</b>)
  }

  return (
    <div className={styles.container}>
      { user ? null : <Redirect to='/' /> }
      { user && <NavPanel user={user} /> }
      <div className={styles.content}>
        <h2>Take a look at the statistics over your accounts, all in one place!</h2>
        <p>You have spent <b>£{statistics.totalExpenditure}</b> over <b>{accounts.length}</b> accounts this month</p>
        <p>Compared to the beginning of this month, you are { upOrDown() } £{statistics.totalDifference} over {accounts.length} accounts</p>
        <p>This month, you have an average spend of £{Math.floor(statistics.totalExpenditure / 30)} per day (with 30 days in a month)</p>
        <p>...or roughly £{Math.floor(statistics.totalExpenditure / statistics.totalTransactions)} per time you use you card.</p>
        <p>You seem to spend the most money at.... xxxxxxxx</p>

        <p>Below we have given you a visual representation of where you spend your money!</p>
        {accounts && chartData && accounts.map((account, index) => {
          return <PieChart key={account[1].id} account={account[1]} accountData={account[0]} chartData={chartData[index]} />
        })}
      </div>
    </div>
  )
}
