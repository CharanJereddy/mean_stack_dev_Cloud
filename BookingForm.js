import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Booking confirmed! We look forward to serving you.');
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default BookingForm;
