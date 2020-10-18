import React from 'react'
import Chart from '../Chart'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Chart Component', () => {
  let container
  let account = {name: 'Debit account example'}
  let accountData = [
    ["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]
  ]

  it('renders without crashing, and with no props', () => {
    container = render(<Chart />)
    expect(container).toBeTruthy()
  })

  it('renders with props passed to it', () => {
    container = render(<Chart account={account} accountData={accountData}/>)
    expect(container).toBeTruthy()
  })

  it('show an error message if there is no account data', async () => {
    accountData = null
    account = null
    const { getByRole } = render(<Chart account={account} accountData={accountData} />)
    const errorElement = getByRole('heading', {name: /Sorry, but we couldnt create your chart!/i})
    expect(errorElement).toBeInTheDocument();
  })
})