import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <nav>
            <ul>
                <li><img src="/logo.jpg" alt="Logo" style={{ height: '50px' }} /></li>
                <li><Link to="/">Home</Link></li>  
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li> 
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
