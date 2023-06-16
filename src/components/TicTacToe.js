import { useState } from "react";
import { Constants } from "./Constants";
import '../styles/TicTacToe.css';
import Board from "./Board";

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY));

  return (
    <div data-testid='tictactoe' className="container">
      <div data-testid='header'>
        {Constants.TITLE}
        <Board boardTestId='board-container' tiles={board}/>
      </div>
    </div>
  );
}

export default TicTacToe;
