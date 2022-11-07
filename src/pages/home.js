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
                            <div className="border border-gray-100 rounded-lg shadow-xl shadow-gray-50 m-4 w-1/4 ">
                                <img src={product.image} alt="product_image" className="h-80 w-full object-cover" />
                                <div className="p-2">
                                    <span className="text-sm font-semibold text-gray-500">{product.brand}</span>
                                    <h2 className="text-md truncate">{product.title}</h2>

                                    <div className="flex items-center">
                                        <span className="text-lg font-semibold">{Math.trunc(product.price - (product.price * (product.discount_in_percent / 100)))}</span>
                                        <span className=" mx-2 line-through text-gray-500 text-sm">{product.price}</span>
                                        <span className="mx-2 text-sm text-green-500 font-semibold">{product.discount_in_percent}% off</span>
                                    </div>

                                    <button className="border m-2 p-2 rounded-lg hover:bg-orange-400 hover:text-white w-full mx-auto font-semibold text-center">
                                        ADD TO CART
                                    </button>
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