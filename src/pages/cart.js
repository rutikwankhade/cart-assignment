import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import { useCart } from '../utils/CartContext';
const Cart = () => {

    const { cartItems, savedItems, totalCartItems } = useCart()

    const calculateTotal = () => {
     return cartItems.reduce((totalWithDiscount, item) => totalWithDiscount + Math.trunc(item.price - (item.price * (item.discount_in_percent / 100))), 0)
        
    }


    return (
        <div className="md:w-10/12 mx-auto flex justify-center">



            <div className="w-8/12 flex flex-col justify-center ">
                {cartItems.map(product => {
                    return <ProductCard product={product}
                        imgHeight="h-full w-40"
                        customCSS='flex items-center P-4 md:w-10/12'
                        showSaveForLaterButton={true}
                        showRemoveFromCartButton={true}

                    />
                })}


                <h2 className="text-2xl font-semibold p-4 border-t-2 border-gray-100">Saved for later</h2>
                <div>
                    {savedItems && savedItems.map(product => {
                        return <ProductCard product={product}
                            imgHeight="h-full w-40"
                            customCSS='flex P-4 md:w-10/12'
                            showRemoveFromSavedButton={true}
                            showAddToCartButton={true}

                        />
                    })}
                </div>
            </div>



            <div className="md:w-1/4 border bordare-gray-50 h-max rounded-lg border-gray-100 shadow-xl shadow-gray-50 mt-4 p-10">
                <h1 className="text-2xl">{totalCartItems} items added to your cart</h1>

                <div className="my-4">
                    <span className="text-lg">Cart Total with discounts</span>
                </div>
                                <span className="text-3xl font-semibold ">    {calculateTotal()}</span>

                <span className="mx-2 line-through text-gray-500 text-lg">    {cartItems.reduce((total, item) => total + item.price, 0)}</span>

            </div>

        </div>
    );
}

export default Cart;