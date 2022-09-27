import './ItemList.css';
import Item from "./Item";

function ItemList({items, ids}) {

    return (
        <div className='ItemList'>
            {items.map(i => {
                const index = items.indexOf(i);
                return <Item id={ids[index]}
                      nombre={i.nombre}
                      precio={i.precio}
                      stock={i.stock}
                      key={index} />}
                      )}
        </div>)
}

export default ItemList;