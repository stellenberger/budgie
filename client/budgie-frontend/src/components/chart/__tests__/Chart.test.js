import React from 'react'
import Chart from '../Chart'
import { render, fireEvent } from '@testing-library/react'

describe('Testing the Chart Component', () => {
  let container
  
  it('renders without crashing', () => {
    container = render(<Chart />)
    expect(container).toBeTruthy()
  })
})