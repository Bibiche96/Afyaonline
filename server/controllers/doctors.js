const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.Doctors = async (req, res) => {
    try {
        const doctors = await prisma.doctor.findMany();
        res.json(doctors);
    } catch (error) {
        console.error('Erreur lors de la récupération des médecins :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des médecins' });
    }
}