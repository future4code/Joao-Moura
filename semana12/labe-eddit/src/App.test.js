import React from 'react';
import App from './App';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';

test("renderizar App", ()=>{
  const {getByText} = render(<App/>)

  expect(getByText("App")).toHaveTextContent("App")
})