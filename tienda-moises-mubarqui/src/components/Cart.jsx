import "./Cart.css";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart(params) {
    const {cart, removeFromCart} = useContext(CartContext)

    return(
        <div className="Cart">
            <div className="cards">
                {cart.map( (i) => {return <div className="card" key={i.id}>
                                     <img src={i.imagen} 
                                         alt={i.nombre + " banner"} />
                                     <p>Película: {i.nombre}</p>
                                     <p>Tickets: {i.quantity}</p>
                                     <button onClick={() => removeFromCart(i.id)} className="delete">Eliminar</button>
                                 </div>
                         }
                )}
            </div>
            <Link to="/checkout" className="BuyTickets">Siguiente</Link>
        </div>
    )
}

export default Cart;