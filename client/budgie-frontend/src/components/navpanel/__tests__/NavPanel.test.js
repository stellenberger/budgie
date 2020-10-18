import React from 'react'
import NavPanel from '../NavPanel'
import { render, fireEvent } from '@testing-library/react'
import { 
  BrowserRouter as BR,
  Route as R
} from 'react-router-dom'

describe('Testing the NavPanel Component', () => {
  let container
  let user = {username: 'stephan', token: '1234'}

  it('renders without crashing', () => {
    container = render(
      <BR>
        <NavPanel user={user}/>
      </BR>
    )
    expect(container).toBeTruthy()
  })

  it('has a title on the page', () => {
    const { getByRole, getAllByRole } = render(
      <BR>
        <NavPanel user={user}/>
      </BR>
    );
    const titleName = getByRole('heading', {name: /stephan/i});
    const links = getAllByRole('list');
    expect(titleName).toBeInTheDocument();
    expect(links[0]).toHaveTextContent(/Statistics/i)
    expect(links[0]).toHaveTextContent(/Add new card/i)
    expect(links[0]).toHaveTextContent(/Account/i)
    expect(links[0]).toHaveTextContent(/About this app/i)
  })

  it('still render if there is no user', () => {
    const { container, getByRole } = render(
      <BR>
        <NavPanel />
      </BR>
    );
    expect(container).toBeTruthy()
  })

  it('will show an erro message if there is no user', () => {
    const { getByRole } = render(
      <BR>
        <NavPanel />
      </BR>
    );
    const errorMessage = getByRole('heading', {name: /Sorry, you need to be logged in to see the navbar/i})
    expect(errorMessage).toBeTruthy()
  })
})