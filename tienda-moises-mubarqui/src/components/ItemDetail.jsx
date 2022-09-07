import "./ItemDetail.css";

function ItemDetail({peli}) {

    const {nombre, precio, stock, descripcion, imagen} = peli

    return (
        <div className="ItemDetail">
            <h1 className="title">{nombre}</h1>
            <h2 className="price">${precio}</h2>
            <p className="description">{descripcion}</p>
            <img className="picture" src={imagen}></img>
        </div>
    )
}

export default ItemDetail;