import React from 'react'
import Dashboard from '../Dashboard'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'
import { act } from 'react-dom/test-utils'

describe('Testing the Dashboard Component', () => {
  let container
  const statistics = {totalExpenditure: 0, totalDifference: 0}
  let accounts = [
    [[["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]],
    {id: 3, name: "debit account example", records: "/debit_account_example.csv", user_id: 1}]
  ]
  afterEach(cleanup)
  
  it('renders without crashing', async () => {
    const user = {username: 'stephan', token: '1234'}
    act(() => {
      container = render(<BR><Dashboard user={user} accounts={accounts} statistics={statistics} /></BR>)
    })
    expect(container).toBeTruthy()
  })

  it('has a title on the page', async () => {
    const user = {username: 'stephan', token: '1234'}
    const { getByText } = render(<BR><Dashboard user={user} accounts={accounts} statistics={statistics}/></BR>);
    const linkElement = getByText(/Welcome back, stephan/i);
    expect(linkElement).toBeInTheDocument();
  })
})