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

  afterEach(cleanup)
  
  it('renders without crashing', async () => {
    const user = {username: 'stephan', token: '1234'}
    act(() => {
      container = render(<BR><Dashboard user={user} /></BR>)
    })
    expect(container).toBeTruthy()
  })

  it('has a title on the page', async () => {
    const user = {username: 'stephan', token: '1234'}
    const { getByText } = render(<BR><Dashboard user={user} /></BR>);
    const linkElement = getByText(/Welcome back, stephan/i);
    expect(linkElement).toBeInTheDocument();
  })
})