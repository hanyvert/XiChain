// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders XiChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/XiChain/i);
    expect(titleElement).toBeInTheDocument();
});
