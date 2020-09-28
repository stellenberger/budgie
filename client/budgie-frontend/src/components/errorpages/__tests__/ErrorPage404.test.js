import React from 'react'
import ErrorPage404 from '../ErrorPage404'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the ErrorPage404 Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<ErrorPage404 />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByText } = render(<ErrorPage404 />);
    const linkElement = getByText(/The page you are looking for does not exist/i);
    expect(linkElement).toBeInTheDocument();
  })
})