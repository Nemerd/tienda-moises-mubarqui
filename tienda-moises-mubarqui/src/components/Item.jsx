import './Item.css';

function Item({id, nombre, precio, stock}) {
    return (
        <div className='Item'>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>${precio}</p>
            <p>{stock}</p>
            <button>Más info</button>
        </div>
    )
}

export default Item;