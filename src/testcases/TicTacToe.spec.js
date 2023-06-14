import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

it('renders TicTacToe component', () => {
  render(<TicTacToe />);
  const tictactoeComponent = screen.getByTestId('tictactoe');
  expect(tictactoeComponent).toBeInTheDocument();
});

