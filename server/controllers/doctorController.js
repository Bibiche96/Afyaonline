const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.registerDoctor = async (req, res) => {
    try {
        const { firstName, lastName, email, password, specialty, availability, qualifications } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctor = await prisma.Doctor.create({
            data: {
                firstName,
                lastName,
                email,
                specialty,
                availability,
                qualifications,
                password: hashedPassword,
            }
        });
        doctor.password = null
        res.status(201).json({ message: 'Doctor enregistré avec succè', doctor });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });


    }
};

exports.loginDoctor = async (req, res) => {
    try {
        const { firstName, lastName,email, password } = req.body;
        const doctor = await prisma.Doctor.findUnique({ where: { email,firstName, lastName } });
        if (!doctor) {
            return res.status(404).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: doctor.id, role: 'doctor' }, process.env.JWT_SECRET, { algorithm: 'RS256' }, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging in the doctor' });
    }
};