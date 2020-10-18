import React from 'react'
import BankAccount from '../BankAccount'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the BankAccount Component', () => {
  let container
  let account = {name: 'Debit account example'}
  let accountData = [
    ["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]
  ]
  it('renders without crashing', () => {
    container = render(<BankAccount account={account} accountData={accountData} />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getAllByText } = render(<BankAccount account={account} accountData={accountData}/>);
    const linkElement = getAllByText(/Debit account example/i);
    expect(linkElement[0]).toBeInTheDocument();
  })

  it('Will an error message if no props or accounts are passed to it', () => {
    const { container } = render(<BankAccount />);
    expect(container).toBeTruthy();
    expect(container).toHaveTextContent('Sorry, but you dont have any accounts.')
  })
})