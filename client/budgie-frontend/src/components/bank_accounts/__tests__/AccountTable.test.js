import React from 'react'
import AccountTable from '../AccountTable'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the AccountTable Component', () => {
  let container
  let user 
  let accountData = [
    ["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]
  ]

  it('renders without crashing', () => {
    user = null
    container = render(<BR><AccountTable accountData={accountData}/></BR>)
    expect(container).toBeTruthy()
  })

  it('Will output a table with the account data', () => {
    const { getByRole } = render(<BR><AccountTable accountData={accountData} /></BR>)
    const tableElement = getByRole('table')
    expect(tableElement).toHaveTextContent('Transaction Date')
  })


  it('show an error message if there is no account data', async () => {
    accountData = null
    const { getByRole } = render(<BR><AccountTable accountData={accountData} /></BR>)
    const errorElement = getByRole('heading', {name: 'There is no account data available'})
    expect(errorElement).toBeInTheDocument();
  })


})