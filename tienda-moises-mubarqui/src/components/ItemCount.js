import { useState } from "react";
import './ItemCount.css';

function ItemCount({stock, onAddToCart}) {
    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }}
    const onSubstract = () =>{
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }}

    const addToCart = () => {
        onAddToCart(quantity)
    }
    return(
        <div className="ItemCount">
            <button onClick={onSubstract}>Quitar</button>
            <p>{quantity}</p>
            <button onClick={onAdd}>Agregar</button>
            <button onClick={addToCart} className="sendToCart">Mandar al carrito</button>
        </div>
    )
}

export default ItemCount;