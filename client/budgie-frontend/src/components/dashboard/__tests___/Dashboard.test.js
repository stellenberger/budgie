import React from 'react'
import Dashboard from '../Dashboard'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the Dashboard Component', () => {
  let container
  
  it('renders without crashing', () => {
    const user = {username: 'stephan', token: '1234'}
    container = render(<BR><Dashboard user={user} /></BR>)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const user = {username: 'stephan', token: '1234'}
    const { getByText } = render(<BR><Dashboard user={user} /></BR>);
    const linkElement = getByText(/Welcome back, stephan/i);
    expect(linkElement).toBeInTheDocument();
  })
})