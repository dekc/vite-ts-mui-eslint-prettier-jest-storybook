/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders App component', () => {
    // arrange
    render(<App />);
    expect(screen.queryByText('Slider...')).toBeInTheDocument();
  });
  it('should show roles', () => {
    render(<App />);
    const action = screen.getByRole('banner');
    expect(action).toBeInTheDocument();
  });
});
