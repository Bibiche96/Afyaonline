const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController')
const doctorController = require('../controllers/doctorController')
const adminController = require('../controllers/adminController')


router.post('/registerPatient', patientController.registerPatient);
router.post('/loginPatient', patientController.loginPatient);
router.post('/registerDoctor', doctorController.registerDoctor);
router.post('/loginDoctor', doctorController.loginDoctor);
router.post('/registerAdmin', adminController.registerAdmin);
router.post('/loginAdmin', adminController.loginAdmin);







module.exports = router;