import { useEffect, useState } from "react";
import axios from "axios"

export default function Doctorslist() {
    const [doctors, setDoctors] = useState([])
    // const users = [
    //     { id: 1, name: 'Bibiche Kweshi', email: 'john.doe@example.com', phone: '1234567890', dateadded: '21/03/2024', status: 'Validé', active: true },
    //     { id: 2, name: 'Israel Nzila', email: 'jane.doe@example.com', phone: '9876543210', dateadded: '21/03/2024', status: 'En attente', active: false },
    //     { id: 3, name: 'Flavio Umba', email: 'john.doe@example.com', phone: '1234567890', dateadded: '21/03/2024', status: 'Validé', active: true },
    //     { id: 4, name: 'Ackeem', email: 'jane.doe@example.com', phone: '9876543210', dateadded: '21/03/2024', status: 'En attente', active: false },

    // ];
    // useEffect(async () => {
    //     const doctorRes = await axios.get("http://localhost:3000/Doctors")
    //     setDoctors(doctorRes.data)
    // }, [])
    return (
        <>
            <table className="w-full mt-14 table-auto">
                <thead >
                    <tr >
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>date added</th>
                        <th>Statut</th>
                        <th>Specialité</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors?.map(doctor => (
                        <tr key={doctor.id}>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            {/* <td>{doctor.phone}</td> */}
                            {/* <td>{doctor.dateadded}</td> */}
                            {/* <td>{doctor.status}</td> */}
                            <td>
                                {/* Actions (suspendre, supprimer) */}
                                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Suspendre</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}