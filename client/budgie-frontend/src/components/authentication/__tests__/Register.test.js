import React from 'react'
import Register from '../Register'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Register Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Register />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Register />);
    const linkElement = getByText(/I am the Register component/i);
    expect(linkElement).toBeInTheDocument();
  })
})