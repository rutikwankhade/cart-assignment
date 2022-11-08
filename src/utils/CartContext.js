import React, { useContext, useEffect, useState } from 'react';


const CartContext = React.createContext()


export function useCart() {
    return useContext(CartContext)
}
export function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = useState([])
    const [savedItems, setSavedItems] = useState([])



    const state = {
        cartItems,
        setCartItems,
        savedItems,
        setSavedItems,
        totalCartItems: cartItems.length
    }

    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>

    );
}

