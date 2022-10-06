import React, { useEffect, useState, createContext } from "react";

const CartContext = createContext();

function CartContextProvider(props) {
    
    const [cart, setCart] = useState([]);
   
    /* 
     * [{
     *  id:0,
     *  quantity: 0
     *  nombre: "str"
     *  precio: 0
     *  imagen: "str"
     * }]
     */
    
    useEffect(() => {
        function updateQtty(){
            let tempQtty = 0;
            cart.forEach( (i) => {tempQtty = tempQtty + i.quantity} )
            setTotalQuantity(tempQtty)
        }
        function updateCash(){
            let tempCash = 0;
            cart.forEach( (i) => {tempCash = tempCash + i.precio} )
            setTotalCash(tempCash)
        }

        updateCash()
        updateQtty()
    }, [cart]);
    
    //-------------Agregar lo que haya debajo de esta línea---------------------
    
    function addToCart(params) {
        // Si el elemento que se pasó existe en el carrito, agregá la nueva cantidad.
        let exists = cart.find( (item) => item.id === params.id )
        if (exists){
            const duplicateElementIndex = cart.findIndex((i) => i.id === params.id);
            if (cart[duplicateElementIndex].quantity + params.quantity <= cart[duplicateElementIndex].stock){
                console.log(cart[duplicateElementIndex].quantity + params.quantity >= cart[duplicateElementIndex].stock)
                cart[duplicateElementIndex].quantity += params.quantity
                setCart([...cart]);
            } else { console.log("Muy ambicioso. ヽ(ಠ_ಠ)ノ\nNo se agregó.")}
        } else {
            setCart([...cart, params]);
        }
    }

    function removeFromCart(params) {
        const index = cart.findIndex((i) => i.id === params);
        const tempCart = [...cart]
        tempCart.splice(index, 1)
        setCart([...tempCart])
    }

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCash, setTotalCash] = useState(0);

    return (
        <>
            <CartContext.Provider 
            value={{
                    /* Todo lo que creé en CartContextProvider */
                    addToCart,
                    removeFromCart,
                    totalQuantity,
                    totalCash,
                    cart
                    }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export {CartContext, CartContextProvider};