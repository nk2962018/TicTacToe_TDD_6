import { render, screen } from "@testing-library/react";
import Tile from "../components/Tile";

describe('Tile works fine when', () => {
    
    it("should render tile component", () => {
        render(<Tile tileTestId='tile'/>)
        const tile = screen.getByTestId('tile');
        expect(tile).toBeInTheDocument();
    });

});