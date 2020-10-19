import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

export default function Chart({ account, chartData }) {
  const [drawChartData, setDrawChartData] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null) 
  const randomNumber = () => {return Math.floor(Math.random() * 255)}
  
  useEffect(() => {
    if (!account || !chartData) {
      setErrorMessage('Sorry, but we couldnt create your chart! Have you uploaded data?')
    } else {
      setErrorMessage(null)
      setDrawChartData({
        labels: chartData.dates.reverse(),
        datasets: [
          {
            label: account.name,
            backgroundColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},0.2)`,
            borderColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`,
            borderWidth: 1,
            hoverBackgroundColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},0.4)`,
            hoverBorderColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`,
            data: chartData.accountBalances.reverse()
          }
        ] 
      })
    }
  }, [chartData])
  
  return (
    <div>
      <h2>{ errorMessage }</h2>
      {drawChartData && 
        <div>
          <h2>{account.name}</h2>
          <Bar
            data={drawChartData}
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
