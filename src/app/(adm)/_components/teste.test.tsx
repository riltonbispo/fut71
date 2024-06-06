import { logRoles, render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('Validar se os componentes carregaram', () => { 
    const { container } =render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: 'Email'});
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    act(() => {
      userEvent.click(submitButton)
    })

    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(submitButton).toBeVisible()

    logRoles(container)
  });

  it('Validar se deu erro no envio', async () => { 
    const { container } = render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: 'Entrar' });
    
    act(() => {
      userEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(container.getElementsByClassName('text-[0.8rem] font-medium text-destructive').length).toBe(2);
    })
    
    logRoles(container)
  });

  it('Validar Email invalido', async () => { 
    const { container } = render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: 'Email'});
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    act(() => {
      fireEvent.change(emailInput, {target: {value: 'testeemail.com'}})
      fireEvent.change(passwordInput, {target: {value: '12'}})
      userEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(container.getElementsByClassName('text-[0.8rem] font-medium text-destructive').length).toBe(0);
    })
    
    logRoles(container)
  });

  it('Validar Envio com sucesso', async () => { 
    const { container } = render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: 'Email'});
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { name: 'Entrar' });

    act(() => {
      fireEvent.change(emailInput, {target: {value: 'teste@email.com'}})
      fireEvent.change(passwordInput, {target: {value: '12345678abc'}})
      userEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(container.getElementsByClassName('text-[0.8rem] font-medium text-destructive').length).toBe(0);
    })
    
    logRoles(container)
  });

});