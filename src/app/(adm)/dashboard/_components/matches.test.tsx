import { logRoles, render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import MatchesMarked from './MatchesMarked'

describe('Resultado das Partidas', () => {
  it('Validar se os componentes carregaram', () => { 
    const { container } =render(<MatchesMarked />);

    
    const inputHomeResult = screen.getByPlaceholderText('gols da casa')
    const inputAwayResult = screen.getByPlaceholderText('gols de fora')
    

    expect(inputHomeResult).toBeVisible()
    expect(inputAwayResult).toBeVisible()

    logRoles(container)
  });

  it('Validar se deu erro no envio', async () => { 
    const { container } = render(<MatchesMarked />);

    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    
    act(() => {
      userEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(container.getElementsByClassName('text-[0.8rem] font-medium text-destructive').length).toBe(2);
    })
    
    logRoles(container)
  });

  it('Validar envio com sucesso', async () => { 
    const { container } = render(<MatchesMarked />);

    const inputHomeResult = screen.getByPlaceholderText('gols da casa')
    const inputAwayResult = screen.getByPlaceholderText('gols de fora')
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    
    act(() => {
      fireEvent.change(inputHomeResult, {target: {value: '4'}})
      fireEvent.change(inputAwayResult, {target: {value: '2'}})
      userEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(container.getElementsByClassName('text-[0.8rem] font-medium text-destructive').length).toBe(0);
    })
    
    logRoles(container)
  });
});