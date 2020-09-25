import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app component', () => {
  let container
  container = render(<App />)
  expect(container).toBeTruthy()
});
