import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';
import { Constants } from '../components/Constants';

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

});