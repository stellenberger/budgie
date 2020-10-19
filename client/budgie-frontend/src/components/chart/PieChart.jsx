import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart({ account, chartData }) {
  const [drawChartData, setDrawChartData] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null) 
  const randomNumber = () => {return Math.floor(Math.random() * 255)}
  
  useEffect(() => {
    if (!account || !chartData) {
      setErrorMessage('Sorry, but we couldnt create your chart! Have you uploaded data?')
    } else {
      setErrorMessage(null)
      setDrawChartData({
        labels: chartData.shops,
        datasets: [
          {
            label: account.name,
            backgroundColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},0.7)`,
            borderColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`,
            borderWidth: 1,
            hoverBackgroundColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},0.9)`,
            hoverBorderColor: `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`,
            data: chartData.debit_amounts
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
          <Pie
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
