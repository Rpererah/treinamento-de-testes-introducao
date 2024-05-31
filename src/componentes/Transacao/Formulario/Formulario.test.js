import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';
describe('render input', () => {
  test('', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    expect(inputText).toBeInTheDocument();
  });

  test('expected type number', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    expect(inputText).toHaveAttribute('type', 'number');
  });

  test('with filled information', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(inputText, '50');
    expect(inputText).toHaveValue(50);
  });
});

test('call event onSubmit when clicked', () => {
  const realizarTransacao = jest.fn();
  render(<Formulario realizarTransacao={realizarTransacao} />);
  const button = screen.getByRole('button');

  userEvent.click(button);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});

test('choose one option of transacao type', () => {
  render(<Formulario />);
  const select = screen.getByTestId('select-opcoes');
  userEvent.click(select);
  const options = ['Depósito', 'Transferência'];
  options.forEach((option) => {
    expect(select).toContainElement(screen.getByText(option));
  });
});

test('the choose Deposito checked ok', () => {
  render(<Formulario />);

  const opcaoBase = screen.getByTestId('select-opcoes');

  userEvent.selectOptions(opcaoBase, 'Depósito');

  expect(opcaoBase).toHaveValue('Depósito');
});

test('the choose Transferencia selected ok', () => {
  render(<Formulario />);

  const opcaoBase = screen.getByTestId('select-opcoes');

  userEvent.selectOptions(opcaoBase, 'Transferência');

  expect(opcaoBase).toHaveValue('Transferência');
});
