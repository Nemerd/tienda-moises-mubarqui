import { useState } from "react";
import './ItemCount.css';

function ItemCount({stock}) {
    const [quantity, setQuantity] = useState(0);

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }}
    const rest = () =>{
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }}

    return(
        <div className="ItemCount">
            <button onClick={add}>Agregar</button>
            <p>{quantity}</p>
            <button onClick={rest}>Quitar</button>
        </div>
    )
}

export default ItemCount;