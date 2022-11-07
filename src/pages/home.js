import React from 'react';

import productsList from '../utils/products.json'

const Home = () => {

    console.log(productsList)
    return (
        <div>


            <div className="flex md:w-10/12 m-20 justify-center flex-wrap mx-auto">


                {
                    productsList.map(product => {
                        return (
                            <div className="border m-4 w-1/4 ">
                                <img src={product.image} alt="product_image" className="h-80 w-full object-cover" />
                                <div className="p-2">
                                    <span className="text-sm font-semibold text-gray-500">{product.brand}</span>
                                    <h2 className="text-md truncate">{product.title}</h2>

                                    <div className="flex">
                                        <span className="line-through text-gray-500 text-sm">{ product.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;