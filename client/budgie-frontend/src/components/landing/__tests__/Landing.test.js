import React from 'react'
import { Landing, Dashboard, Login, Register } from '../../../components'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the Landing Component', () => {
  let container
  let user 
  const statistics = {totalExpenditure: 0, totalDifference: 0}
  let accounts = [
    [[["Transaction Date", "Transaction Type", "Sort Code", "Account Number", "Transaction Description", "Debit Amount", "Credit Amount", "Balance"],
    ["28/01/2020", "DD", "11-22-33", "1122334", "American Express", "200.00", "", "1499.00"]],
    {id: 3, name: "debit account example", records: "/debit_account_example.csv", user_id: 1}]
  ]

  it('renders without crashing', () => {
    user = null
    container = render(<BR><Landing user={user}/></BR>)
    expect(container).toBeTruthy()
  })

  it('will render if a real user exists in the state', () => {
    const user = {username: 'stephan', token: '1234'}
    container = render(<BR><Landing user={user} /></BR>)
    expect(container).toBeTruthy()
  })


  it('will redirect if a user exists in the state', () => {
    const user = {username: 'stephan', token: '1234'}
    const { 
      getByText 
    } = render(
      <BR>
        <R path='/'><Landing user={user}/></R>
        <R path='/dashboard'>Welcome back, stephan</R>
      </BR>
    );
    const titleElement = getByText(/Welcome back, stephan/i);
    expect(titleElement).toBeInTheDocument();
  })

  it('has a title on the page', () => {
    user = null
    const { getByText } = render(<BR><Landing user={user}/></BR>);
    const titleElement = getByText(/Welcome to budgie, the smart budgeting app to manage your spendings/i);
    expect(titleElement).toBeInTheDocument();
  })

  it('has a login button on the page', () => {
    user = null
    const { getByText } = render(<BR><Landing user={user}/></BR>);
    const buttonElement = getByText(/Login/i);
    expect(buttonElement).toBeInTheDocument();
  })

  it('redirects you to Login page on button click', async () => {
    user = null
    const { 
      getByText 
    } = render(
      <BR>
        <R path='/'><Landing user={user}/></R>
        <R path='/login'><Login user={user}/></R>
      </BR>
    );
    const button = getByText('Login')
    await fireEvent.click(button)
    const titleElement = getByText(/Username/i);
    expect(titleElement).toBeInTheDocument();
  })

  it('has a register button on the page', () => {
    user = null
    const { getByText } = render(<BR><Landing user={user}/></BR>);
    const buttonElement = getByText(/Register/i);
    expect(buttonElement).toBeInTheDocument();
  })

  it('redirects you to Login page on button click', async () => {
    user = null
    const { 
      getByText 
    } = render(
      <BR>
        <R path='/'><Landing user={user}/></R>
        <R path='/register'><Register user={user}/></R>
      </BR>
    );
    const button = getByText('Register')
    await fireEvent.click(button)
    const titleElement = getByText(/Username/i);
    expect(titleElement).toBeInTheDocument();
  })

  it('will not redirect if no user is valid', () => {
    user = null
    const { 
      getByText 
    } = render(
      <BR>
        <R path='/'><Landing user={user}/></R>
        <R path='/dashboard'><Dashboard user={user}  accounts={accounts} statistics={statistics} /></R>
      </BR>
    );
    const titleElement = getByText(/Welcome to budgie, the smart budgeting app to manage your spendings/i);
    expect(titleElement).toBeInTheDocument();
  })
})