import React, { useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

export default function Chart({ account, accountData }) {
  const [chartData, setChartData] = useState(null) 
  let dates = []
  let accountBalances = []
  let accountBalance
  useEffect(() => {
    // this will move all dates into their own array
    for (let i=1; i < accountData.length; i++) {
      dates.push(accountData[i][0])
    }
    for (let i=1; i < accountData.length; i++) {
      accountBalance = parseInt(accountData[i][7])
      accountBalances.push(accountBalance)
    }
    setChartData({
      labels: dates.reverse(),
      datasets: [
        {
          label: account.name,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: accountBalances.reverse()
        }
      ] 
    })
  }, [])
  
  return (
    <div>
      {chartData && 
        <div>
          <h2>{account.name}</h2>
          <Bar
            data={chartData}
            width={100}
            height={150}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      }
  </div>
  )
}
