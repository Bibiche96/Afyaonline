const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const appointmentController = {
    createAppointement: async (req, res) => {

        try {
            const { dateTime, status, patientId, doctorId } = req.body;
            const newAppointment = await prisma.Appointment.create({
                data: {
                    dateTime,
                    status,
                    patientId,
                    doctorId
                }
            });
            res.status(201).json(newAppointment);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la création du rendez-vous' });
        }
    },
    getAllsAppointement: async (req, res) => {
        try {
            const appointments = await prisma.Appointment.findMany();
            res.json(appointments);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des rendez-vous' });
        }
    },
    getAllsAppointementById: async (req, res) => {
        const { id } = req.params;
        try {
            const appointment = await prisma.Appointment.findUnique({ where: { id: parseInt(id) } });
            if (!appointment) {
                return res.status(404).json({ message: 'Rendez-vous non trouvé' });
            }
            res.json(appointment);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du rendez-vous' });
        }

    },

    updateAppointement: async (req, res) => {
        const { id } = req.params;
        const { dateTime, status, patientId, doctorId } = req.body;
        try {
            const updatedAppointment = await prisma.Appointment.update({
                where: { id: parseInt(id) },
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
        const { id } = req.params;
        try {
            const deletedAppointment = await prisma.appointment.delete({ where: { id: parseInt(id) } });

            if (!deletedAppointment) {
                return res.status(404).json({ error: 'Rendez-vous non trouvé' });
            }
            res.json({ message: 'Rendez-vous supprimé avec succès' });
        } catch (error) {
            res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du rendez-vous' });
        }
    }
}


module.exports = appointmentController



