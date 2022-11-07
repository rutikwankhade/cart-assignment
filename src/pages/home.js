import React from 'react';

import productsList from '../utils/products.json'
import ProductCard from '../components/ProductCard'
const Home = () => {

    console.log(productsList)
    return (
        <div>

            <div className="flex md:w-10/12 m-20 justify-center flex-wrap mx-auto">

                {
                    productsList.map(product => {
                        return (
                            <ProductCard product={product} />
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;