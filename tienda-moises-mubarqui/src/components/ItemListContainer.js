import ItemList from './ItemList';
import './ItemListContainer.css';
import { getCatalog } from '../firebase/firebase';
import { useEffect, useState } from "react";

function ItemListContainer() {

    const [ catalog, setCatalog ] = useState([]);
    const [ IDS, setIDS ] = useState([]);
    
    useEffect(() => {
        async function consultar() {
            const [productos, IDs] = await getCatalog()
            setCatalog([...productos])
            setIDS(IDs)
        }

        consultar()
    }, []);
    
    return(
        <div className='ItemListContainer'>
            <ItemList items={catalog} ids={IDS} />
        </div>
    )
}

export default ItemListContainer;