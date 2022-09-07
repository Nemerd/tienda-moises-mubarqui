import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import mock from "../mock/Items-mockup.json"

function ItemDetailContainer({id}) {

    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(mock.find( item => item.id === id))
    }, [id]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail peli={item}/>
        </div>
    )
}

export default ItemDetailContainer;