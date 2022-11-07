import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import { useCart } from '../utils/CartContext';
const Cart = () => {

    const { cartItems, setCartItems } = useCart()

  


    return ( 
        <div>
            {cartItems.map(product => {
                return <ProductCard product={ product} />
            })}
        </div>
     );
}
 
export default Cart;