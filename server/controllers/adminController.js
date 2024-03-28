const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.registerAdmin = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await prisma.Admin.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        });
        admin.password = null
        res.status(201).json({ message: 'Admin registered successfully', admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const admin = await prisma.Admin.findUnique({ where: { email, firstName, lastName } });
        if (!admin) {
            return res.status(404).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET, { algorithm: 'RS256' }, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while logging in the admin' });
    }
};