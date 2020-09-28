import React from 'react'
import Dashboard from '../Dashboard'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Dashboard Component', () => {
  let container
  
  it('renders without crashing', () => {
    const user = true
    container = render(<Dashboard user={user} />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const user = true
    const { getByText } = render(<Dashboard user={user} />);
    const linkElement = getByText(/I am the Dashboard component/i);
    expect(linkElement).toBeInTheDocument();
  })
})