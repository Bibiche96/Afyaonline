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
        res.status(201).json({ message: 'Admin registered successfully', admin });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while registering the admin' });
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        const { firstName, lastName, password } = req.body;
        const admin = await prisma.Admin.findUnique({ where: { firstName, lastName } });
        if (!admin) {
            return res.status(404).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging in the admin' });
    }
};