import Tile from "./Tile";
import '../styles/Board.css';

const Board = ({boardTestId,tiles}) => {
    return(
        <div className="board-container"  data-testid={boardTestId}>
            {
                tiles.map((tile, i) => (
                    <Tile value={tile} tileTestId='tile' key={i}/>
                ))
            }
        </div>
    )
}

export default Board;