const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const password = process.env.ADMIN_PASSWORD;

const prisma = new PrismaClient();

exports.Admin = async (req, res) => {
    const { email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(String(password), 10);

        const admin = await prisma.admin.create({
            data: {
                email: email,
                password: hashedPassword
            }
        });

        console.log('Admin ajouté avec succès à la base de données.');
        return res.json(admin);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'administrateur :', error);
        return res.status(201).json({ error });
    }
}


exports.adminCreate = async (req, res) => {
    const adm = await prisma.admin.findMany()
    res.json(adm)
}

