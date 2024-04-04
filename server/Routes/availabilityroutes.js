const express = require('express');
const router = express.Router();

const availabilityController = require('../controllers/availabilityController');



router.get('/getAvailability', availabilityController.getAvailability);







module.exports = router;