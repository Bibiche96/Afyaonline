const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.registerPatient = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, age, gender, motif, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const patient = await prisma.Patient.create({
            data: {
                firstName,
                lastName,
                phone,
                email,
                age,
                gender,
                motif,
                password: hashedPassword
            }
        });
        res.status(200).json({ message: 'Patient enregistré avec succès', patient });
    } catch (error) {

        res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement du patient' });
    }
};


exports.loginPatient = async (req, res) => {
    try {
        const { firstName, lastName, password } = req.body;
        const patient = await prisma.Patient.findUnique({ where: { firstName, lastName } });
        if (!patient) {
            return res.status(404).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, patient.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: patient.id, role: 'patient' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {

        res.status(500).json({ error: 'An error occurred while logging in the patient' });
    }
};





