import React from 'react'
import Login from '../Login'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'
import axiosMock from 'axios'


describe('Testing the Login Component', () => {
  let container
  let user 
  const setUser = jest.fn()

  afterEach(cleanup) 

  it('renders without crashing', () => {
    const user = null
    container = render(<Login user={user} setUser={setUser}/>)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByRole, getByText } = render(<Login user={user} setUser={setUser}/>);
    const headerElement = getByRole('heading', {name: 'Login'} )
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Login');
  })

  it('has a login button on the page', () => {
    user = null
    const { getByRole } = render(<BR><Login user={user} setUser={setUser}/></BR>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })

  it('makes an api call on submit', async () => {
    const user = null
    const { getByRole } = render(
      <BR>
        <Login user={user} setUser={setUser} />
        <R path='/dashboard'>Redirect</R>
      </BR>
    )
    const loginButton = getByRole('button');
    act(() => {
      fireEvent.click(loginButton)
    })
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
  })
})