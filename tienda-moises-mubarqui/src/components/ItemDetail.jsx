import "./ItemDetail.css";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({peli}) {

    const {id, nombre, precio, descripcion, imagen, stock} = peli
    const {addToCart} = useContext(CartContext);
    const [ocultar, setOcultar] = useState(false);

    const onAddToCart = (param) => {
        addToCart({id: id, quantity: param});
        setOcultar(true);
    }

    return (
        <div className="ItemDetail">
            <h1 className="title">{nombre}</h1>
            <h2 className="price">${precio}</h2>
            <p className="description">{descripcion}</p>
            <img className="picture" src={imagen} alt={"Imagen de la película " + nombre}></img>
            {ocultar || <ItemCount stock={stock} onAddToCart={onAddToCart}/>}
        </div>
    )
}

export default ItemDetail;