import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, nombre, precio, stock, imagen }) {
    return (
        <Link to={"/item/" + id} className='Item' key={id}>
            <img src={imagen} alt={"Imagen de muestra para " + nombre}  />
            <p>{nombre}</p>
            <p>${precio}</p>
            <p>Entradas disponibles: {stock}</p>
        </Link>
    )
}

export default Item;