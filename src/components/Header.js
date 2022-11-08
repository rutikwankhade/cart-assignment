import React from 'react';
import { Link } from 'react-router-dom'
import { useCart } from '../utils/CartContext';
const Header = () => {

    const { totalCartItems } = useCart()
    return (
        <div className="md:w-8/12 text-lg font-semibold mx-auto m-4 flex">
            <Link to="/" className="text-lg">Flipcart</Link>

            <div className="flex ml-auto mr-2">
                <span className=" text-orange-500 mx-2">{totalCartItems}</span>
                <Link to="/cart" className="ml-auto mr-4">Cart</Link>
            </div>

        </div>
    );
}

export default Header;