import React from 'react';
import icon from '../img/icon.png';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={icon} alt=""></img>
            </div>
            <div>
                <p>IP Tracker</p>
            </div>
        </div>
    )
};

export default Header;