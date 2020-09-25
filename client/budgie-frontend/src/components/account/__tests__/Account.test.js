import React from 'react'
import Account from '../Account'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Account Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Account />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Account />);
    const linkElement = getByText(/I am the Account component/i);
    expect(linkElement).toBeInTheDocument();
  })
})

