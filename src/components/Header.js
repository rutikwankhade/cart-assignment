import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {


    return ( 
        <div className="md:w-8/12 text-lg font-semibold mx-auto m-4 flex">
            <Link to="/" className="text-lg">Flipcart</Link>
            {/* <span>{ totalCartItems}</span> */}
            <Link to="/cart" className="ml-auto mr-4">Cart</Link>
        </div>
     );
}
 
export default Header;