import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { getProduct } from "../firebase/firebase";

function ItemDetailContainer() {
    const { id } = useParams();
    const [ item, setItem ] = useState({});

    useEffect(() => {
        async function consultar() {
            setItem(await getProduct(id))
        }

        consultar()
    }, [ id ]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail peli={ item } id={ id }/>
        </div>
    )
}

export default ItemDetailContainer;