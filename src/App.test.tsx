import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('<App />', () => {
  test('shows the correct error message for short input', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.change(input, { target: { value: '' } });

    expect(
      screen.getByText('Length must be 1-12 characters.')
    ).toBeInTheDocument();
  });

  test('shows the correct error message for missing uppercase', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'missinguppercase1#' } });

    expect(
      screen.getByText('Must contain at least one uppercase letter.')
    ).toBeInTheDocument();
  });

  test('shows the correct error message for missing lowercase', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'MISSINGLOWERCASE1#' } });

    expect(
      screen.getByText('Must contain at least one lowercase letter.')
    ).toBeInTheDocument();
  });

  test('shows the correct error message for missing digit', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'MissingDigit#' } });

    expect(
      screen.getByText('Must contain at least one digit.')
    ).toBeInTheDocument();
  });

  test('shows the correct error message for missing special character', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Mi1' } });

    expect(
      screen.getByText('Must contain at least one special character.')
    ).toBeInTheDocument();
  });

  test('shows the correct error message for whitespace characters', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: ' Character1#' } });

    expect(
      screen.getByText('Must not contain any whitespace characters.')
    ).toBeInTheDocument();
  });

  test('shows "The string is valid" when all conditions are satisfied', () => {
    render(<App />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Valid1$' } });

    expect(screen.getByText('The string is valid.')).toBeInTheDocument();
  });
});
