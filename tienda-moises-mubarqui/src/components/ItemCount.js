import { useState } from "react";
import './ItemCount.css';

function ItemCount({stock}) {
    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }}
    const onSubstract = () =>{
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }}

    return(
        <div className="ItemCount">
            <button onClick={onAdd}>Agregar</button>
            <p>{quantity}</p>
            <button onClick={onSubstract}>Quitar</button>
        </div>
    )
}

export default ItemCount;