const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const appointmentController = {
    createAppointement: async (req, res) => {
        const { dateTime, status, patientId, doctorId } = req.body;
        try {
            const doctor = await prisma.doctor.findUnique({ where: { id: doctorId } });
            const patient = await prisma.user.findUnique({ where: { id: patientId } });

            if (!doctor || !patient) {
                return res.status(404).json({ message: 'Médecin ou patient introuvable' });
            } else {
                const newAppointment = await prisma.Appointment.create({
                    data: {
                        dateTime,
                        status,
                        patientId,
                        doctorId
                    }
                });
                res.status(201).json(newAppointment);
            }
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la création du rendez-vous' });
        }
    },
    // getAllsAppointement: async (req, res) => {
    //     try {
    //         const appointments = await prisma.Appointment.findMany();
    //         res.json(appointments);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des rendez-vous' });
    //     }
    // },
    getAllsAppointementById: async (req, res) => {

        const userId = parseInt(req.user.id); // Récupérer l'ID de l'utilisateur à partir des informations d'authentification
        const userRole = req.user.role; // Récupérer le rôle de l'utilisateur à partir des informations d'authentification

        try {
            let appointments;
            if (userRole === 'patient') {
                // Si l'utilisateur est un patient, récupérer les rendez-vous associés à ce patient
                appointments = await prisma.Appointment.findMany({
                    where: { patientId: userId },
                    include: { doctor: true } // Inclure les détails du médecin associé à chaque rendez-vous
                });
            } else if (userRole === 'doctor') {
                // Si l'utilisateur est un médecin, récupérer les rendez-vous associés à ce médecin
                appointments = await prisma.Appointment.findMany({
                    where: { doctorId: userId },
                    include: { patient: true } // Inclure les détails du patient associé à chaque rendez-vous
                });
            } else {
                res.status(404).json({ message: 'Rendez-vous non trouvé' });
            }

            res.json(appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
        // const doctorId = parseInt(req.params.id);
        // try {
        //     const appointment = await prisma.Appointment.findUnique({
        //         where: { doctorId },
        //         include: { patient: true }
        //     });
        //     if (!appointment) {
        //         return res.status(404).json({ message: 'Rendez-vous non trouvé' });
        //     }
        //     res.json(appointment);
        // } catch (error) {
        //     res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du rendez-vous' });
        // }

    },

    updateAppointement: async (req, res) => {
        const appointmentId = parseInt(req.params.id);
        const { dateTime, status, patientId, doctorId } = req.body;
        try {
            const updatedAppointment = await prisma.Appointment.update({
                where: { id: appointmentId },
                data: { dateTime, status, patientId, doctorId }
            });
            if (!updatedAppointment) {
                return res.status(404).json({ error: 'Rendez-vous non trouvé' });
            }
            res.json(updatedAppointment);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du rendez-vous' });
        }
    },

    deleteAppointement: async (req, res) => {
        const appointmentId = parseInt(req.params.id);
        try {
            const deletedAppointment = await prisma.Appointment.delete({ where: { id: appointmentId } });

            if (!deletedAppointment) {
                return res.status(404).json({ error: 'Rendez-vous non trouvé' });
            }
            res.json({ message: 'Rendez-vous supprimé avec succès' });
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du rendez-vous' });
        }
    },
    getDoctorAvailability: async (req, res) => {
        const { doctorId, date } = req.params;
        try {
            // Récupérer tous les rendez-vous du médecin pour la date spécifiée
            const availabilities = await prisma.appointment.findMany({
                where: {
                    doctorId,
                    date,// Date spécifiée
                }
            });

            // Logique pour calculer les disponibilités du médecin pour la journée
            // Ceci dépend de votre modèle de données et de la manière dont vous gérez les plages horaires du médecin
            // Vous devrez peut-être récupérer les plages horaires disponibles du médecin pour cette date
            // et les comparer aux rendez-vous existants pour déterminer les disponibilités

            res.json(availabilities); // Renvoyer les disponibilités au front-end
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des disponibilités du médecin' });
        }
    }

}


module.exports = appointmentController



