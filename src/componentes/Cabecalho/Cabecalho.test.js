import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('render user name', () => {
  render(<Cabecalho />);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument();
});
