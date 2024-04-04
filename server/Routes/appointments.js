const express = require('express');
const router = express.Router();
const authenticateUser = require('../controllers/authmiddleware')
const appointmentController = require('../controllers/appointmentController')


router.post("/createAppointement", appointmentController.createAppointement);
router.get("/getAllsAppointementById/:id", authenticateUser, appointmentController.getAllsAppointementById);
router.put("/updateAppointement/:id", authenticateUser, appointmentController.updateAppointement);
router.delete("/deleteAppointement/:id", appointmentController.deleteAppointement);
router.delete("/getDoctorAvailability", appointmentController.getDoctorAvailability);











module.exports = router;