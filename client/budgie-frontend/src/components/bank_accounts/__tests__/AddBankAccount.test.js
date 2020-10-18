import React from 'react'
import { AddBankAccount, Landing } from '../../../components'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the AddBankAccount Component', () => {
  let container
  let user

  it('renders without crashing', () => {
    user = {username: 'stephan', token: '1234'}
    container = render(<BR><AddBankAccount user={user} /></BR>)
    expect(container).toBeTruthy()
  })

  it('has a title', () => {
    user = {username: 'stephan', token: '1234'}
    const { getByRole } = render(<BR><AddBankAccount user={user} /></BR>)
    const headerElement = getByRole('heading', {name: 'To add new cards or bank accounts, fill in the following form to get an overview of your spendings'} )
    expect(headerElement).toBeInTheDocument();
  })

  it('Will redirect if the user is not logged in', () => {
    const user = null
    const { 
      getByText 
    } = render(
      <BR>
        <AddBankAccount user={user}/>
        <R path='/'><Landing user={user}/></R>
      </BR>
    );
    const titleElement = getByText(/Welcome to budgie/i);
    expect(titleElement).toBeInTheDocument();
  })

  it('Will not redirect if the user is logged in', () => {
    user = {username: 'stephan', token: '1234'}
    const { 
      container,
    } = render(
      <BR>
        <AddBankAccount user={user}/>
        <R exact path='/'><Landing user={user}/></R>
      </BR>
    );
    expect(container).not.toHaveTextContent(/Welcome to budgie,/i);
  })
})