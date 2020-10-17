import React from 'react'
import Register from '../Register'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'
import axiosMock from 'axios'

describe('Testing the Register Component', () => {
  let container
  let user 

  it('renders without crashing', () => {
    container = render(<Register />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Register />);
    const linkElement = getByText(/Register here!/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('has a login button on the page', () => {
    user = null
    const { getByRole } = render(<BR><Register user={user}/></BR>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })

  it('makes an api call on submit', async () => {
    const user = null
    const { getByRole } = render(<Register user={user} />)
    const registerButton = getByRole('button');
    act(() => {
      fireEvent.click(registerButton)
    })
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
  })
})