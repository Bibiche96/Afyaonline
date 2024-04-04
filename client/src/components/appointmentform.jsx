import React, { useState } from 'react';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        patientName: '',
        date: '',
        doctor: '',
        motif: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/createAppointement', formData);
            console.log('New appointment created:', response.data);

            setFormData({ patientName: '', date: '', doctor: '' });
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center mt-20 space-y-10'>
            <h2>Prendre rendez-vous :</h2>
            <form onSubmit={handleSubmit} className='flex flex-col w-96 space-y-10 '>
                <input
                    type="text"
                    name="patientName"
                    placeholder="Nom du patient"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2 mr-2"
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    name="doctor"
                    placeholder="Nom du médecin"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2 mr-2"
                />
                <input
                    type="text"
                    name="motif"
                    placeholder="Motif de consultation"
                    value={formData.motif}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Créer votre rendez-vous
                </button>
            </form>
        </div>
    );
};

