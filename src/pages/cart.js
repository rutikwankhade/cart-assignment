import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import { useCart } from '../utils/CartContext';
const Cart = () => {

    const { cartItems, setCartItems, totalCartItems } = useCart()




    return (
        <div className="flex justify-center">

            

            <div className="w-8/12 flex flex-wrap">
                {cartItems.map(product => {
                    return <ProductCard product={product} showSaveForLaterButton={true} />
                })}
            </div>

            <div className="w-1/4 border p-10">
                <h1 className="text-2xl">{totalCartItems } items added to your cart</h1>
            </div>

        </div>
    );
}

export default Cart;