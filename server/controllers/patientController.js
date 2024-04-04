const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.registerPatient = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, age, gender, motif, password } = req.body;
        const schema = Joi.object({

            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).required(),
            phone: Joi.string().pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/).required(),
            age: Joi.number().integer().min(0).max(150).required(),
            gender: Joi.string().alphanum().min(3).max(30).required(),
            motif: Joi.string().pattern(/^[a-zA-Z\s]{3,30}$/).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
        })
        const { error } = schema.validate(req.body)

        if (error) {
            return res.send("veillez respecter le format des champs")
            // console.log(error);
        }
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
        patient.password = null
        res.status(200).json({ message: 'Patient enregistré avec succès', patient });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
};


exports.loginPatient = async (req, res) => {
    try {
        const { email, password } = req.body;
        const schema = Joi.object({
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
        })
        const { error } = schema.validate(req.body)

        if (error) {
            res.send("veillez respecter le format des champs")
            // console.log(error);
        }
        const patient = await prisma.Patient.findUnique({ where: { email } });
        if (!patient) {
            return res.status(404).json({ message: 'email ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, patient.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'email ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: patient.id, role: 'patient' }, process.env.JWT_SECRET, { algorithm: 'RS256' }, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
};





