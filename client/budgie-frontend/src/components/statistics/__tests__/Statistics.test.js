import React from 'react'
import Statistics from '../Statistics'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the Statistics Component', () => {
  let container
  const user = {username: 'stephan', token: '1234'}
  const statistics = {totalDifference: 500, totalExpenditure: 400, totalTransactions: 10}
  const accounts = [
    [[["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]],
    {id: 3, name: "debit account example", records: "/debit_account_example.csv", user_id: 1}]
  ]
  const pieChartData = [
    {
      debit_amounts: [200, 58, 20, 10, 25, 8, 10, 300, 10], 
      shops: ["American Express", "Tesco", "Sainsburies", "Wetherspoons", "Waitrose", "McDonalds", "M&S", "BarclayCard", "Sainsburies"]
    }
  ]

  it('renders without crashing', () => {
    container = render(
      <BR>
        <R><Statistics user={user} statistics={statistics} accounts={accounts} chartData={pieChartData}/></R>
      </BR>
    )
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(
      <BR>
        <R><Statistics user={user} statistics={statistics} accounts={accounts} chartData={pieChartData}/></R>
      </BR>
    )
    const linkElement = getByText(/Take a look at the statistics over your accounts, all in one place!/i);
    expect(linkElement).toBeInTheDocument();
  })
})