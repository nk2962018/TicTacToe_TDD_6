import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';
import { Constants } from '../components/Constants';
import Board from '../components/Board';

describe('TicTacToe works fine when', ()=> {
  beforeEach(() => {
    render(<TicTacToe/>)
  });

  it('renders TicTacToe component', () => {
    const tictactoeComponent = screen.getByTestId('tictactoe');
    expect(tictactoeComponent).toBeInTheDocument();
  });

  it('should display title', () => {
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should display correct title text', () => {
    const headerText = screen.getByTestId('header');
    expect(headerText).toHaveTextContent(Constants.TITLE);
  });

  it("should render board component", () => {
    render(<Board/>)
    const board = screen.getByTestId('board-container');
    expect(board).toBeInTheDocument();
  });

});