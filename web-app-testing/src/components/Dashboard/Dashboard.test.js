import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })

})