import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const reservationDetails = { date, time, guests, occasion };
        console.log(reservationDetails);
    };

    return (
        <form className= "form-container" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit} role="form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
            
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map((timeOption, index) => (
                    <option key={index} value={timeOption}>{timeOption}</option>
                ))}
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
            
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>

            </select>
            
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default ReservationForm;
