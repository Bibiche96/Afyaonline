const express = require('express');
const router = express.Router();
const patientsget = require('../controllers/patients')




router.get('/Patients', patientsget.Patients);








module.exports = router;


