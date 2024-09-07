import React from 'react';
import './style.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='flex items-center gap-5'>
                <img className='logo' src="./src/assets/icon/texnomart.png" alt="Logo" />
                <input className='search-input' type="text" placeholder='Search...' />
            </div>
            <div className='user-info'>
                <p className='user-name'>Nurik</p>
                <img className='user-image' src="./src/assets/icon/user.png" alt="User" />
            </div>
        </div>
    );
}

export default Header;
