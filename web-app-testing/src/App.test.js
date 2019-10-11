import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App.js';
import { exportAllDeclaration } from '@babel/types';

afterEach(rtl.cleanup);

test('Renders app', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

test('Renders app title', () => {
  const wrapper = rtl.render(<App />);
  const heading = wrapper.getByText(/Scoreboard/i);
  expect(heading).toBeVisible();
})


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/