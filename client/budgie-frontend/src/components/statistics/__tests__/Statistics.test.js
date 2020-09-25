import React from 'react'
import Statistics from '../Statistics'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Statistics Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Statistics />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Statistics />);
    const linkElement = getByText(/I am the Statistics component/i);
    expect(linkElement).toBeInTheDocument();
  })
})