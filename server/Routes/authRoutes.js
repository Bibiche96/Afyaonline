const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController')
const doctorController = require('../controllers/doctorController')
const adminController = require('../controllers/adminController')
const admroute = require('../controllers/adminController')


router.post('/registerPatient', patientController.registerPatient);
router.post('/loginPatient', patientController.loginPatient);
router.post('/registerDoctor', doctorController.registerDoctor);
router.post('/loginDoctor', doctorController.loginDoctor);
router.get('/diamant/center/register', adminController.Admin);
router.get('/adminCreate', admroute.adminCreate);








module.exports = router;