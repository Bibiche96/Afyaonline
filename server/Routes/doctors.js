const express = require('express');
const router = express.Router();
const doctorsget = require('../controllers/doctors')

router.get('/Doctors', doctorsget.Doctors);

module.exports = router;