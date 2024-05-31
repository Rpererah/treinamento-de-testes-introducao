import { render, screen } from '@testing-library/react';
import Extrato from '.';

test('render array transacoes', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transacoes} />);
  const array = screen.getByRole('listitem');
  expect(array).toBeInTheDocument();
});
