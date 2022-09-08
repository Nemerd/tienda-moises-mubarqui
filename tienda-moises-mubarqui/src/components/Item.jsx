import { Link } from 'react-router-dom';
import './Item.css';

function Item({id, nombre, precio, stock}) {
    return (
        <div className='Item'>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>${precio}</p>
            <p>Entradas disponibles: {stock}</p>
            <Link to={"/item/" + id}>Más info</Link>
        </div>
    )
}

export default Item;