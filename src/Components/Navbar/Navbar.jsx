import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo"><h2>Logo</h2></div>
            <div className="nav-link">
                <li><a href="/home">Order</a></li>
                <li><a href="/home">New Collection</a></li>
                <li><a href="/home">Contact Us</a></li>
            </div>
        </div>
    );
};

export default Navbar;