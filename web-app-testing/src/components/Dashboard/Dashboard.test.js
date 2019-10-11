import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })

    it('Displays all button text', () => {
        const btnText = render(<Dashboard />);
        btnText.getByText(/Ball/i)
        btnText.getByText(/Strike/i)
        btnText.getByText(/Foul/i)
        btnText.getByText(/Hit/i)
        btnText.getByText(/Out/i)
        btnText.getByText(/Clear all/i)
    })

    it('Renders all six dashboard buttons', () => {
        const { getAllByRole } = render(<Dashboard />);
        const btnArry = getAllByRole('button');
        expect(btnArry).toHaveLength(6);
    })

})