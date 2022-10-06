import './Checkout.css';
import { useState, useContext, useEffect } from "react";
import { CartContext } from '../context/CartContext';
import { addOrder, resetSimulation, modifyStock } from "../firebase/firebase";

function Checkout(props) {

    const { cart, totalCash } = useContext(CartContext);
    const [orderNo, setOrderNo] = useState();
    const [parrafo, setParrafo] = useState();
    const [form, setForm] = useState({nombre:   "",
                                      email:    "",
                                      telefono: ""});

    async function onSubmit(evt){
        evt.preventDefault();
        const dia = new Date()
        const data = { form, cart, dia, totalCash }
        setOrderNo(await addOrder(data))
        cart.forEach(
            (item) => {

                modifyStock(item, item.quantity)
            }
        )

    }

    function onChange(evt){
        const { name, value } = evt.target
        const tmpForm = {...form,
                         [name]: value }
        setForm(tmpForm)
    }

    useEffect(() => {
        if (orderNo) {
            setParrafo(`Tu orden es la número ${orderNo}`)
        }
    }, [orderNo]);

    return(
    <div className='Checkout'>
        <h1>Finalizando compra</h1>
        <form onSubmit={onSubmit}>
            <label for="nombre">Nombre</label>
                <input type="text"
                       name='nombre'
                       id='nombre'
                       placeholder='Nombre'
                       value={form.nombre}
                       onChange={(evt) => onChange(evt)} 
                       />
            
            <label for="email">E-mail</label>
                <input type="text"
                       name='email'
                       id='email'
                       placeholder='E-mail'
                       value={form.email}
                       onChange={(evt) => onChange(evt)} />
            <label for="telefono">Teléfono</label>
                <input type="text"
                       name='telefono'
                       id='telefono'
                       placeholder='Teléfono'
                       value={form.telefono}
                       onChange={(evt) => onChange(evt)} />

                <button type='submit'>Finalizar compra</button>
            </form>
            <p>{parrafo}</p>
            <button onClick={resetSimulation} className="resetter">Resetear stocks</button>
    </div>
    )
}

export default Checkout;