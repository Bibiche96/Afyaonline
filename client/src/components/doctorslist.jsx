export default function Doctorslist() {
    const users = [
        { id: 1, name: 'Bibiche Kweshi', email: 'john.doe@example.com', phone: '1234567890', dateadded: '21/03/2024', status: 'Validé', active: true },
        { id: 2, name: 'Israel Nzila', email: 'jane.doe@example.com', phone: '9876543210', dateadded: '21/03/2024', status: 'En attente', active: false },
        { id: 3, name: 'Flavio Umba', email: 'john.doe@example.com', phone: '1234567890', dateadded: '21/03/2024', status: 'Validé', active: true },
        { id: 4, name: 'Ackeem', email: 'jane.doe@example.com', phone: '9876543210', dateadded: '21/03/2024', status: 'En attente', active: false },

    ];
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dateadded}</td>
                                    <td>{user.status}</td>
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