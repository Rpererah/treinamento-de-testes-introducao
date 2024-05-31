import { render, screen } from '@testing-library/react';
import Menu from './index';

test('render link to homepage', () => {
  render(<Menu />);
  const anchorToHomepage = screen.getByText('Inicial');
  expect(anchorToHomepage).toBeInTheDocument();
});

test('render array of links', () => {
  render(<Menu />);
  const arrayAnchors = screen.getAllByRole('link');
  expect(arrayAnchors).toHaveLength(4);
});

test('cant render links for extrato', () => {
  render(<Menu />);
  const anchorToExtrato = screen.queryByText('Extrato');
  expect(anchorToExtrato).not.toBeInTheDocument();
});

test('render array link with className link', () => {
  render(<Menu />);
  const arrayAnchors = screen.getAllByRole('link');
  arrayAnchors.forEach((anchor) => expect(anchor).toHaveClass('link'));
  expect(arrayAnchors).toMatchSnapshot();
});
