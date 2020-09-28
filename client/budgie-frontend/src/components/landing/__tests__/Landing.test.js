import React from 'react'
import Landing from '../Landing'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Landing Component', () => {
  let container
  
  it('renders without crashing', () => {
    const user = null
    container = render(<Landing user={user}/>)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const user = null
    const { getByText } = render(<Landing user={user}/>);
    const linkElement = getByText(/Welcome to budgie, the smart budgeting app to manage your spendings/i);
    expect(linkElement).toBeInTheDocument();
  })
})