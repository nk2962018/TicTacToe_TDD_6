import { render, screen } from "@testing-library/react";
import Board from "../components/Board";

describe('Board works fine when', () => {

    it("should render one tile in the board", () => {
        render(<Board/>)
        const tile1 = screen.getByTestId('tile');
        expect(tile1).toBeInTheDocument();
    });
    
    it("should render one tile with value X", () => {
        render(<Board/>)
        const tileText = screen.getByTestId('tile');
        expect(tileText).toHaveTextContent('X');
    });
    
});
