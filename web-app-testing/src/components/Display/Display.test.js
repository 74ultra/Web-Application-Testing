import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display.js';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    })

    it('displays balls, strikes, outs', () => {
        const display = render(<Display />);
        display.getByText(/Ball/)
        display.getByText(/Strike/)
        display.getByText(/Out/)
    })
})