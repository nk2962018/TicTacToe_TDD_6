import { Constants } from "./Constants";
import '../styles/TicTacToe.css';

const TicTacToe = () => {
  return (
    <div data-testid='tictactoe' className="container">
      <div data-testid='header'>
        {Constants.TITLE}
      </div>
    </div>
  );
}

export default TicTacToe;
