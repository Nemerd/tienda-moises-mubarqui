import "./Cart.css";
import {useContext} from 'react';
import { CartContext } from "../context/CartContext";
import mock from "../mock/Items-mockup.json"

function Cart(params) {
    const {cart} = useContext(CartContext)
    return(
        <div className="Cart">
            <div className="cards">
                {cart.map( (i) => {return <div className="card">
                                        <img src={mock[i.id].imagen} 
                                             alt={mock[i.id].nombre + " banner"} />
                                        <p>Película: {mock[i.id].nombre}</p>
                                        <p>Tickets: {i.quantity}</p>
                                      </div>} )}
            </div>
            <button className="BuyTickets">Comprar tickets</button>
        </div>
    )
}

export default Cart;