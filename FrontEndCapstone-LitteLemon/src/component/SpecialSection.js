import React from 'react';
import MenuItems from './MenuItems';  

function SpecialsSection() {
    const specials = [
        {
            name: "Greek Salad",
            price: "$12.90",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "salad.jpg" 
        },
        {
            name: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: "bruschetta.jpg"
        },
        {
            name: 'Grilled fish',
            price: "$15.99",
            description: "Grilled fish.",
            image: "fish.jpg"
        }
    ];

    

    return (
        <div className="specials-section">
            <h2>This week's specials!</h2>
            {specials.map(special => (
                <MenuItems key={special.name} item={special} />
            ))}
        </div>
    );
}

export default SpecialsSection;
