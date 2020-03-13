import React from 'react';
import ReactDOM from 'react-dom';
import * as rt1 from '@testing-library/react'
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Nav from './components/nav';
import { Test } from 'jest';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('Does Nav render', () => {
  render(<Nav />)
})