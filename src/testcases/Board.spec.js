import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import { ConstantsTest } from "../components/ContantsTest";

describe('Board works fine when', () => {

    it("renders 3x3 board ", () => {
        render(<Board tiles={Array(ConstantsTest.NO_OF_TILES_IN_THE_BOARD).fill(ConstantsTest.EMPTY)}/>)
        const tiles = screen.getAllByTestId('tile');
        expect(tiles).toHaveLength(ConstantsTest.NO_OF_TILES_IN_THE_BOARD);
    });
    
    it('should have tiles with empty values initially', () => {
        render(<Board tiles={Array(ConstantsTest.NO_OF_TILES_IN_THE_BOARD).fill(ConstantsTest.EMPTY)}/>)
        const tiles = screen.getAllByTestId('tile');
        tiles.forEach((tile) => {
            expect(tile.textContent).toBe(ConstantsTest.EMPTY);
          });
    });

});
