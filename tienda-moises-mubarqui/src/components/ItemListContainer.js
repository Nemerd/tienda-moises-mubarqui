// import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import mock from "../mock/Items-mockup.json"
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const { id } = useParams();
    console.log("Categoria: " + id)
    
    return(
        <div className='ItemListContainer'>
            <ItemList items={mock} />
        </div>
    )
}

export default ItemListContainer;