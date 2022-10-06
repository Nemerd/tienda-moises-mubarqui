import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio, stock, imagen }) {
    console.log(imagen)
    return (
        <Link to={"/item/" + id} className='Item' key={id}>
            <img src={imagen} />
            <p>{nombre}</p>
            <p>${precio}</p>
            <p>Entradas disponibles: {stock}</p>
        </Link>
    )
}

export default Item;