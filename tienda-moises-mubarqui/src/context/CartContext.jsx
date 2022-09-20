import React, { useState, createContext } from "react";

const CartContext = createContext();

function CartContextProvider(props) {
    
    const [cart, setCart] = useState([]);

    /* 
     * [{id:0,
     *  quantity: 0}]
     */
    
    function checkDuplicates(params) {
        // Si el elemento que se pasó existe en el carrito, agregá la nueva cantidad.
        let exists = cart.find( (item) => item.id === params.id )
        if (exists){
            console.log("2")
            const duplicateElementIndex = cart.findIndex(cart.filter((i) => i.id === params.id));
            const newCart = cart[duplicateElementIndex].quantity + params.quantity;
            setCart(newCart);
            updateQtty()
        } else {
            console.log("1")
            setCart(cart.push(params));
            updateQtty()
        }
    }

    function updateQtty(){
        let tempQtty = 0;
        cart.forEach( (i) => {tempQtty = tempQtty + i.quantity} )
        setTotalQuantity(tempQtty)
    }

    //-------------Agregar lo que haya debajo de esta línea---------------------

    function addToCart(params) {
        checkDuplicates(params);
        console.log("Llega: " + params)
        console.log(params)
        console.log("Hay: " + cart)
        console.log(cart)
    }

    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <>
            <CartContext.Provider 
            value={{
                    /* Todo lo que creé en CartContextProvider */
                    addToCart,
                    totalQuantity
                    }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export {CartContext, CartContextProvider};