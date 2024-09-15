import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Little Lemon Chicago</h1>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button onClick={() => navigate('/reservation')}>Reserve a Table</button>
            </div>
            <img src="/special.jpg" alt="special" className="hero-image"/>
        </div>
    );
}

export default HeroSection;
