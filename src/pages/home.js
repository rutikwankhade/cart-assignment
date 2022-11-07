import React, { useState, useEffect } from 'react';

import productsList from '../utils/products.json'
import ProductCard from '../components/ProductCard'



const Home = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        if (localStorage.getItem('cartItems') !== null) {
            setCartItems(JSON.parse(window.localStorage.getItem('cartItems')))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])



    const handleAddToCart = (product) => {
        console.log(product, "added to cart")
        setCartItems([...cartItems, product])

    }

    console.log(productsList)
    return (
        <div>

            <div className="flex md:flex-row flex-col md:w-10/12 justify-center flex-wrap mx-auto">

                {
                    productsList.map(product => {
                        return (
                            <ProductCard product={product} handleAddToCart={handleAddToCart} />
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;