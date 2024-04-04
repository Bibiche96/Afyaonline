const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.registerDoctor = async (req, res) => {
    try {

        const { firstName, lastName, email, password, specialty, availability, qualifications } = req.body;
        const schema = Joi.object({

            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).required(),
            specialty: Joi.string().alphanum().min(3).max(30).required(),
            availability: Joi.string().alphanum().min(3).max(30).required(),
            qualifications: Joi.string().alphanum().min(3).max(30),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
        })
        const { error, value } = schema.validate(req.body)

        if (error) {
            return res.send("veillez respecter le format des champs")
            // console.log(error);
        }

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
        res.status(201).json({ message: 'Docteur enregistré avec succè', doctor });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
};

exports.loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const schema = Joi.object({
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string().pattern(new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/')).required(),
        })
        const { error } = schema.validate(req.body)

        if (error) {
            res.send("veillez respecter le format des champs")
        }
        const doctor = await prisma.Doctor.findUnique({ where: { email } });
        if (!doctor) {
            return res.status(404).json({ message: 'email ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'email ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: doctor.id, role: 'doctor' }, process.env.JWT_SECRET, { algorithm: 'RS256' }, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la connexion du docteur' });
    }
};