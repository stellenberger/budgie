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

  afterEach(cleanup) 

  it('renders without crashing', () => {
    container = render(<Login />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByRole, getByText } = render(<Login />);
    const headerElement = getByRole('heading', {name: 'Login'} )
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Login');
  })

  it('has a login button on the page', () => {
    user = null
    const { getByRole } = render(<BR><Login user={user}/></BR>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })

  it('makes an api call on submit', async () => {
    const user = null
    const { getByRole } = render(<Login user={user} />)
    const loginButton = getByRole('button');
    act(() => {
      fireEvent.click(loginButton)
    })
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
  })
})