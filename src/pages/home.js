import React, { useState, useEffect } from 'react';

import productsList from '../utils/products.json'
import ProductCard from '../components/ProductCard'



const Home = () => {
    const [cartItems, setCartItems] = useState([])

  

    console.log(productsList)
    return (
        <div>

            <div className="flex md:flex-row flex-col md:w-10/12 justify-center flex-wrap mx-auto">

                {
                    productsList.map(product => {
                        return (
                            <ProductCard product={product} imgHeight="h-80" customCSS="flex-col md:w-1/4" />
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;