import '../styles/Tile.css';

const Tile = ({value,tileTestId}) =>{
    return(
        <button data-testid={tileTestId} className='tile'>
            {value}
        </button>
    )
}

export default Tile;