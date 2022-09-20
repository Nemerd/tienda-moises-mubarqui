import "./Cart.css";
import {useContext} from 'react';
import { CartContext } from "../context/CartContext";
import mock from "../mock/Items-mockup.json"

function Cart(params) {
    const {cart, } = useContext(CartContext)
    return(
        <>
        {cart.map( (i) => {<div className="card">{mock[i.id].nombre}</div>} )}
        </>
    )
}

export default Cart;