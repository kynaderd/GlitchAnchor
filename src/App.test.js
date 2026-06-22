// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlitchAnchor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlitchAnchor/i);
    expect(titleElement).toBeInTheDocument();
});
