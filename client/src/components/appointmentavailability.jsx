import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from './appointmentform';

export default function AppointmentAvailability({ handleAppointmentBooking }) {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const consultationDuration = 30; // Durée moyenne de la consultation en minutes

    useEffect(() => {
        const Available = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getAvailability', {
                    params: {
                        idMedecin,
                        heureDisponible: 'heureRecherchee'
                    }
                });
                setAvailableTimes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        Available();
    }, []);


    const calculateAvailableTimeSlots = () => {
        const openingHours = Array.from({ length: 8 }, (_, i) => i + 9); // Plages horaires potentielles (de 9h00 à 17h00)

        // Filtrer les plages horaires potentielles en fonction des plages horaires déjà réservées
        const bookedTime = availableTimes.map(time => new Date(time.heureDebut).getHours());
        const availabletime = openingHours.filter(time => !bookedTime.includes(time));


        const adjustedTimeSlots = availabletime.filter(time => {
            const startHour = new Date().setHours(time, 0, 0, 0);
            const endHour = new Date().setHours(time, 0, 0, 0);
            const endTimeWithConsultation = endHour + consultationDuration * 60000;
            return endTimeWithConsultation <= endHour;
        });


        const formatedTime = adjustedTimeSlots.map(time => `${time}:00`);

        return formatedTime;
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    return (
        <div>
            <h2>Choisissez une heure :</h2>
            <div className=" mb-4">
                {calculateAvailableTimeSlots().map(time => (
                    <button
                        key={time}
                        onClick={() => handleTimeSelection(time)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-2 mr-2"
                    >
                        {time}
                    </button>
                ))}
            </div>
            {selectedTime && (
                <div>
                    <AppointmentForm selectedTime={selectedTime} handleTimeSelection={handleTimeSelection} />
                </div>
            )}
        </div>
    );
};