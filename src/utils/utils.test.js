import { calculaNovoSaldo } from '.';

describe('simulate a function that not exists', () => {
  test('return saldo value with updated incomes', () => {
    const calcIncomes = jest.fn((saldo) => saldo + saldo * 0.005);
    const balance = 100;
    const newBalance = calcIncomes(balance);
    expect(newBalance).toBe(100.5);
    expect(calcIncomes).toBeCalledTimes(1);
    expect(calcIncomes).toHaveBeenCalledWith(balance);
  });
});

test('function deposit, result in more balance', () => {
  const transaction = {
    transacao: 'Depósito',
    valor: 50,
  };

  const newBalance = calculaNovoSaldo(transaction, 100);
  expect(newBalance).toBe(150);
});

test('function transfer, result in less balance', () => {});
