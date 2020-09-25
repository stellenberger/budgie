import React from 'react'
import Login from '../Login'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Login Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Login />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Login />);
    const linkElement = getByText(/I am the Login component/i);
    expect(linkElement).toBeInTheDocument();
  })
})