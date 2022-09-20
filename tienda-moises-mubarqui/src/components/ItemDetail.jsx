import "./ItemDetail.css";
import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({peli}) {

    const {nombre, precio, descripcion, imagen, stock} = peli
    const [ocultar, setOcultar] = useState(false);

    const onAddToCart = (param) => {
        console.log(param)
        setOcultar(true)
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