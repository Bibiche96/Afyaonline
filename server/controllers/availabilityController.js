const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAvailability = async (req, res) => {
    try {
        const { idMedecin, dateDisponible } = req.query;
        const availability = await prisma.Availability.findMany({
            where: {
                medecinId: parseInt(idMedecin),
                date: new Date(dateDisponible),
            },
        });
        res.json(availability);
    } catch (error) {
        console.error("Error fetching disponibilites:", error);
        res.status(500).json({ error: "Error fetching disponibilites" });
    }
};