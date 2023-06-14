import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';
import { Constants } from '../components/Constants';

it('renders TicTacToe component', () => {
  render(<TicTacToe />);
  const tictactoeComponent = screen.getByTestId('tictactoe');
  expect(tictactoeComponent).toBeInTheDocument();
});

it('should display title', () => {
  render(<TicTacToe />);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});

it('should display correct title text', () => {
  render(<TicTacToe />);
  const headerText = screen.getByTestId('header');
  expect(headerText).toHaveTextContent(Constants.TITLE);
});
