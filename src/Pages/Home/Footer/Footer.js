import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center py-4 footer'>
            <p>Dental Park</p>
            <p>Dr. Sajib</p>
            <p>Phone:+880161718191</p>
            <p><p><small>copyright @ {year} </small></p></p>
        </div>
    );
};

export default Footer;