import React from 'react'
import Statistics from '../Statistics'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Statistics Component', () => {
  let container
  
  it('renders without crashing', () => {
    const user = true
    container = render(<Statistics user={user}/>)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const user = true
    const { getByText } = render(<Statistics user={user} />);
    const linkElement = getByText(/I am the Statistics component/i);
    expect(linkElement).toBeInTheDocument();
  })
})