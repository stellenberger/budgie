import React from 'react'
import Dashboard from '../Dashboard'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Dashboard Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Dashboard />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Dashboard />);
    const linkElement = getByText(/I am the Dashboard component/i);
    expect(linkElement).toBeInTheDocument();
  })
})