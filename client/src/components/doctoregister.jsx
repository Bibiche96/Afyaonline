import { useState, useEffect } from "react";
import axios from 'axios';

export default function RegisteredDoctor() {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {

        axios.get("http://localhost:5000/registerDoctor")
            .then(response => {
                setDoctor(response.data.doctor);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de l\'utilisateur enregistré :', error);
            });
    }, []);

    return (
        <div>
            {doctor && (
                <div>
                    <p>Nom : {doctor.firstName}</p>
                    <p>Prénom : {doctor.lastName}</p>
                    <p>Prénom : {doctor.email}</p>
                    <p>Prénom : {doctor.password}</p>
                    <p>Prénom : {doctor.speciality}</p>
                    <p>Prénom : {doctor.qualifications}</p>
                    <p>Prénom : {doctor.Availability}</p>

                </div>
            )}
        </div>
    );
}
