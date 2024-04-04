import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editedAppointment, setEditedAppointment] = useState({
        id: '',
        patientName: '',
        date: '',
        doctor: ''
    });

    useEffect(() => {
        const getAppointement = async () => {
            try {
                const token = localStorage.getItem('token'); // Récupérer le jeton JWT d'authentification du stockage local
                const response = await axios.get("http://localhost:5000/getAllsAppointementById/:id", {
                    headers: {
                        Authorization: `Bearer ${token}` // Ajouter le jeton JWT d'authentification aux en-têtes de la requête
                    }
                });
                setAppointments(response.data);
            } catch (error) {
                console.error('Erreur de recupération:', error);
            }
        };

        getAppointement();
    }, []);
    const deleteAppointment = async (appointmentId) => {
        try {
            await axios.delete("http://localhost:5000/deleteAppointement/:id");
            // Rafraîchir la liste des rendez-vous après la suppression
            const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId);
            setAppointments(updatedAppointments);
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
        }
    };

    const handleEdit = (appointment) => {
        setEditedAppointment(appointment);
        setEditing(true);
    };

    const handleChange = (e) => {
        setEditedAppointment({ ...editedAppointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`http://localhost:5000/updateAppointement/:id/${editedAppointment.id}`, editedAppointment);
            setEditing(false);
            // Rafraîchir la liste des rendez-vous après la mise à jour
            const updatedAppointments = appointments.map(appointment =>
                appointment.id === editedAppointment.id ? editedAppointment : appointment
            );
            setAppointments(updatedAppointments);
        } catch (error) {
            console.error('Erreur lors de la mise à jour:', error);
        }
    };

    return (
        <div className="">
            <h2>Vos rendez-vous</h2>
            <ul className="divide-y divide-gray-200">
                {appointments.map(appointment => (
                    <li key={appointment.id} className="py-4 flex">
                        {editing && editedAppointment.id === appointment.id ? (
                            <div className="ml-3">
                                {/* Formulaire de modification */}
                                <input type="text" name="patientName" value={editedAppointment.patientName} onChange={handleChange} />
                                <input type="text" name="date" value={editedAppointment.date} onChange={handleChange} />
                                <input type="text" name="doctor" value={editedAppointment.doctor} onChange={handleChange} />
                                <button onClick={handleSubmit}>Enregistrer</button>
                            </div>
                        ) : (
                            <div className="ml-3">
                                {/* Affichage des détails du rendez-vous */}
                                <strong>Patient:</strong> {appointment.patientName},
                                <strong>Date:</strong> {appointment.date},
                                <strong>Médecin:</strong> {appointment.doctor}
                                <button onClick={() => deleteAppointment(appointment.id)}>Supprimer</button>
                                <button onClick={() => handleEdit(appointment)}>Modifier</button>
                            </div>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    );
};

