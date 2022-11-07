import React, { useState, useEffect } from 'react';


import { useCart } from '../utils/CartContext';

const ProductCard = ({ product, handleAddToCart }) => {

    const { setCartItems, cartItems } = useCart()

    const addToCart = (product) => {
        setCartItems([...cartItems, product])
    }




    return (
        <div className="border border-gray-100 rounded-lg shadow-xl shadow-gray-50 m-4 md:w-1/4 ">
            <img src={product.image} alt="product_image" className="h-80 rounded-t-lg w-full object-cover" />
            <div className="p-2">
                <span className="text-sm font-semibold text-gray-500">{product.brand}</span>
                <h2 className="text-md truncate">{product.title}</h2>

                <div className="flex items-center">
                    <span className="text-lg font-semibold">{Math.trunc(product.price - (product.price * (product.discount_in_percent / 100)))}</span>
                    <span className=" mx-2 line-through text-gray-500 text-sm">{product.price}</span>
                    <span className="mx-2 text-sm text-green-500 font-semibold">{product.discount_in_percent}% off</span>
                </div>

                <button
                    onClick={() => addToCart(product)}
                    className="border m-2 p-2 rounded-lg hover:bg-orange-400 hover:text-white w-full mx-auto font-semibold text-center">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ProductCard;