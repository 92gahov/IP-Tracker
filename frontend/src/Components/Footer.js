import React from 'react';
import heart from '../img/heart-5-24.png';

const Footer = () => {
    return (
        <div className='footer'>
            <span>Made with&nbsp;&nbsp;</span>
            <img src={heart} alt=""></img>
            <span>&nbsp;&nbsp;by <a rel='noopener noreferrer' href="https://github.com/92gahov" target="_blank">92gahov</a></span>
        </div>
    )
};

export default Footer;