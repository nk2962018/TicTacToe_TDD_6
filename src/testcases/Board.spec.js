import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import { Constants } from "../components/Constants";

describe('Board works fine when', () => {

    it("renders 3x3 board ", () => {
        render(<Board tiles={Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY)}/>)
        const tiles = screen.getAllByTestId('tile');
        expect(tiles).toHaveLength(Constants.NO_OF_TILES_IN_THE_BOARD);
    });
    
    it('should have tiles with empty values initially', () => {
        render(<Board tiles={Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY)}/>)
        const tiles = screen.getAllByTestId('tile');
        tiles.forEach((tile) => {
            expect(tile.textContent).toBe(Constants.EMPTY);
          });
    });

});
