const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController')

router.get("/getAllAppointement", appointmentController.getAllsAppointement);
router.post("/createAppointement", appointmentController.createAppointement);
router.get("/getAllsAppointementById/:id", appointmentController.getAllsAppointementById);
router.put("/updateAppointement/:id", appointmentController.updateAppointement);
router.delete("/deleteAppointement/:id", appointmentController.deleteAppointement);










module.exports = router;