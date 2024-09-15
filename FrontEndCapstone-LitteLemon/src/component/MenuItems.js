import React from 'react';
import './MenuItems.css'; 

function MenuItems({ item }) {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image"/>
            <div className="menu-item-details">
                <h3>{item.name} - {item.price}</h3>
                <p>{item.description}</p>
                <button onClick={() => alert('Order placed for ' + item.name)}>Order a delivery</button>
            </div>
        </div>
    );
}

export default MenuItems;
