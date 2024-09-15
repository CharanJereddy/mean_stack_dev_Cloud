import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from './component/ReservationForm';

describe('ReservationForm', () => {
    test('renders ReservationForm component', () => {
        render(<ReservationForm />);
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
    });

    test('allows input to be entered', () => {
        render(<ReservationForm />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        userEvent.type(dateInput, '2024-09-20');
        fireEvent.change(timeSelect, { target: { value: '19:00' } });
        userEvent.clear(guestsInput);
        userEvent.type(guestsInput, '4');
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        expect(dateInput.value).toBe('2024-09-20');
        expect(timeSelect.value).toBe('19:00');
        expect(guestsInput.value).toBe('4');
        expect(occasionSelect.value).toBe('Birthday');
    });
});
