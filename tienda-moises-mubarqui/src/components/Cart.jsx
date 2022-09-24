import "./Cart.css";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";

function Cart(params) {
    const {cart} = useContext(CartContext)

    return(
        <div className="Cart">
            <div className="cards">
                {cart.map( (i) => {return <div className="card">
                                        <img src={i.imagen} 
                                             alt={i.nombre + " banner"} />
                                        <p>Película: {i.nombre}</p>
                                        <p>Tickets: {i.quantity}</p>
                                      </div>} )}
            </div>
            <button className="BuyTickets">Comprar tickets</button>
        </div>
    )
}

export default Cart;