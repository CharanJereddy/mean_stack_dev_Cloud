import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  test('renders the booking form', () => {
    render(<BookingForm />);

    // Check if the form and its elements are rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/book now/i)).toBeInTheDocument();
  });

  test('updates input values and submits the form', () => {
    render(<BookingForm />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-09-15' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });

    // Submit the form
    fireEvent.click(screen.getByText(/book now/i));

    // Check if the success message is displayed
    expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
  });
});
