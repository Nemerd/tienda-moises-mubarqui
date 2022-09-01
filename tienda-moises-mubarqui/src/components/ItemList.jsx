import './ItemList.css';
import Item from "./Item";

function ItemList({items}) {
    return (
        <div className='ItemList'>
            {items.map(i => <Item id={i.id} 
                                    nombre={i.nombre}
                                    precio={i.precio}
                                    stock={i.stock} /> )}
        </div>
    )
}

export default ItemList;