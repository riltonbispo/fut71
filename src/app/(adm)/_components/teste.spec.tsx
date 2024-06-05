import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import { LoginForm } from './LoginForm';


describe('LoginForm', () => {
  test('validates email input', async () => { 
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');

  
    userEvent.type(emailInput, 'invalid-email');
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeDisabled();

  
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'valid@example.com');

  
    await waitFor(() => {
      expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Sign in')).not.toBeDisabled();
  });
});