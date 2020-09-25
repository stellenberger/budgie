import React from 'react'
import Landing from '../Landing'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Landing Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Landing />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<Landing />);
    const linkElement = getByText(/I am the Landing component/i);
    expect(linkElement).toBeInTheDocument();
  })
})