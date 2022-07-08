import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';


const Header = () => {
    return (
        <div className='headers'>
            <img src={logo} alt="" className='logo-item' />
            <ul className="header-menu">
                <li>home</li>
                <li>Package</li>
                <li>testimonial</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Header;