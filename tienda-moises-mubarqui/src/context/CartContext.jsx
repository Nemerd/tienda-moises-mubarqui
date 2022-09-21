import React, { useEffect, useState, createContext } from "react";

const CartContext = createContext();

function CartContextProvider(props) {
    
    const [cart, setCart] = useState([]);
   
    /* 
     * [{id:0,
     *  quantity: 0}]
     */
    
    useEffect(() => {
        function updateQtty(){
            let tempQtty = 0;
            cart.forEach( (i) => {tempQtty = tempQtty + i.quantity} )
            setTotalQuantity(tempQtty)
        }

        updateQtty()
    }, [cart]);
    
    function checkDuplicates(params) {
        // Si el elemento que se pasó existe en el carrito, agregá la nueva cantidad.
        let exists = cart.find( (item) => item.id === params.id )
        if (exists){
            console.log("Duplicado")

            const duplicateElementIndex = cart.findIndex((i) => i.id === params.id);
            cart[duplicateElementIndex].quantity += params.quantity;
            console.log(cart)
            setCart([...cart]);
        } else {
            console.log("Primero")
            setCart([...cart, params]);
        }
    }

    //-------------Agregar lo que haya debajo de esta línea---------------------

    function addToCart(params) {
        checkDuplicates(params);
        }

    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <>
            <CartContext.Provider 
            value={{
                    /* Todo lo que creé en CartContextProvider */
                    addToCart,
                    totalQuantity,
                    cart
                    }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export {CartContext, CartContextProvider};