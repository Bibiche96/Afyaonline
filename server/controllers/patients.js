const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.Patients = async (req, res) => {
    try {
        const patients = await prisma.patient.findMany();
        res.json(patients);
    } catch (error) {
        console.error('Erreur lors de la récupération des patients :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des patients' });
    }
}

