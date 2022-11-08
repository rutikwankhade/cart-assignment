import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import { useCart } from '../utils/CartContext';
const Cart = () => {

    const { cartItems, savedItems, totalCartItems } = useCart()




    return (
        <div className="md:w-10/12 mx-auto flex justify-center">

            

            <div className="w-8/12 flex flex-col justify-center ">
                {cartItems.map(product => {
                    return <ProductCard product={product} imgHeight="h-full w-40" customCSS='flex items-center P-4 md:w-10/12' showSaveForLaterButton={true} />
                })}
           
           
                <h2 className="text-2xl font-semibold p-4 border-t-2 border-gray-100">Saved for later</h2>
                <div>
                      {savedItems.map(product => {
                    return <ProductCard product={product} imgHeight="h-full w-40" customCSS='flex P-4 md:w-10/12' showRemoveFromSavedButton={true}  />
                })}
           </div>
            </div>

            

            <div className="w-1/4 border p-10">
                <h1 className="text-2xl">{totalCartItems } items added to your cart</h1>
            </div>

        </div>
    );
}

export default Cart;