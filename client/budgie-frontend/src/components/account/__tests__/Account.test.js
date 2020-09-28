import React from 'react'
import Account from '../Account'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Account Component', () => {
  let container
  
  it('renders without crashing', () => {
    const user = true
    container = render(<Account user={user} />)
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const user = true
    const { getByText } = render(<Account user={user}/>);
    const linkElement = getByText(/I am the Account component/i);
    expect(linkElement).toBeInTheDocument();
  })
})

