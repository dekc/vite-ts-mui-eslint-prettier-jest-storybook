/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';

import { About } from '@/ui/About';

describe('App', () => {
  it('renders About component', () => {
    // arrange
    render(<About />);
    expect(screen.queryByText('About')).toBeInTheDocument();
  });
});
