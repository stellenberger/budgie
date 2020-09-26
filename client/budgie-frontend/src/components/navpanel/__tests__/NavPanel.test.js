import React from 'react'
import NavPanel from '../NavPanel'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the NavPanel Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<NavPanel />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<NavPanel />);
    const linkElement = getByText(/I am the NavPanel component/i);
    expect(linkElement).toBeInTheDocument();
  })
})