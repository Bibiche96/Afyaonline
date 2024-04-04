const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; 

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Récupérer le jeton d'authentification des en-têtes
    if (!token) {
        return res.status(401).json({ error: 'Authorization token is required' });
    }
    try {
        const decodedToken = jwt.verify(token, secretKey); // Vérifier et décoder le jeton
        req.user = decodedToken; // Stocker les informations d'authentification dans la requête
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticateUser;