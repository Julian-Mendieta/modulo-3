"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const router = (0, express_1.Router)();
router.get('/', appointmentController_1.getAllAppointmentsHandler);
router.get('/:id', appointmentController_1.getAppointmentByIdHandler);
router.post('/schedule', appointmentController_1.scheduleAppointmentHandler);
router.put('/cancel', appointmentController_1.cancelAppointmentHandler);
exports.default = router;
