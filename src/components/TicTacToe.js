import { Constants } from "./Constants";
import '../styles/TicTacToe.css';
import Board from "./Board";

const TicTacToe = () => {
  return (
    <div data-testid='tictactoe' className="container">
      <div data-testid='header'>
        {Constants.TITLE}
        <Board boardTestId='board-container'/>
      </div>
    </div>
  );
}

export default TicTacToe;
