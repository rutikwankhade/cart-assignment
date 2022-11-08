import React, { useState, useEffect } from 'react';


import { useCart } from '../utils/CartContext';

const ProductCard = ({
    product,
    showSaveForLaterButton,
    showRemoveFromSavedButton,
    showRemoveFromCartButton,
    showAddToCartButton,

    customCSS,
    imgHeight
}) => {

    const { setCartItems, cartItems, savedItems, setSavedItems } = useCart()

    const addToCart = (product) => {
        setCartItems([...cartItems, product])
        const index = savedItems.indexOf(product);
        if (index > -1) {

            // remove item
            savedItems.splice(index, 1);
            setSavedItems(savedItems)
        }

    }

    const addToSaveForLater = (product) => {

        setSavedItems([...savedItems, product])

        const index = cartItems.indexOf(product);
        if (index > -1) {

            // remove item
            cartItems.splice(index, 1);
            setCartItems(cartItems)
        }

    }


    const removeFromSaved = (product) => {
        const index = savedItems.indexOf(product);
        if (index > -1) {

            // remove item
            savedItems.splice(index, 1);
            setSavedItems([...savedItems])
        }
    }

    const removeFromCart = (product) => {
        const index = cartItems.indexOf(product);
        if (index > -1) {

            // remove item
            cartItems.splice(index, 1);
            setCartItems([...cartItems])
        }
    }





    return (
        <div className={` ${customCSS} border border-gray-100 rounded-lg shadow-xl shadow-gray-50 m-4  `}>
            <img src={product.image} alt="product_image" className={`${imgHeight} rounded-t-lg w-full object-cover`} />
            <div className="p-4">
                <span className="text-sm font-semibold text-gray-500">{product.brand}</span>
                <h2 className="text-md truncate">{product.title}</h2>

                <div className="flex items-center">
                    <span className="text-xl font-semibold">{Math.trunc(product.price - (product.price * (product.discount_in_percent / 100)))}</span>
                    <span className=" mx-2 line-through text-gray-500 text-sm">{product.price}</span>
                    <span className="mx-2 text-sm text-green-500 font-semibold">{product.discount_in_percent}% off</span>
                </div>
                {showAddToCartButton ?
                    <button
                        onClick={() => addToCart(product)}
                        className="border m-2 p-2 rounded-lg hover:bg-orange-400 hover:text-white w-full mx-auto font-semibold text-center">
                        ADD TO CART
                    </button> : <div></div>
                }


                {showSaveForLaterButton ?
                    <button
                        onClick={() => addToSaveForLater(product)}
                        className="border m-2 p-2 rounded-lg hover:bg-yellow-400 hover:text-white w-full mx-auto font-semibold text-center">
                        SAVE FOR LATER
                    </button> :
                    <div></div>
                }

                {showRemoveFromCartButton ?
                    <button
                        onClick={() => removeFromCart(product)}
                        className="border m-2 p-2 rounded-lg hover:bg-red-400 hover:text-white w-full mx-auto font-semibold text-center">
                        REMOVE FROM CART
                    </button> : <div></div>
                }
                {showRemoveFromSavedButton ?
                    <button
                        onClick={() => removeFromSaved(product)}
                        className="border m-2 p-2 rounded-lg hover:bg-red-400 hover:text-white w-full mx-auto font-semibold text-center">
                        REMOVE
                    </button> :
                    <div></div>
                }
            </div>
        </div>
    );
}

export default ProductCard;