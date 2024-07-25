"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentHandler = exports.scheduleAppointmentHandler = exports.getAppointmentByIdHandler = exports.getAllAppointmentsHandler = void 0;
const appointmentService_1 = require("../service/appointmentService");
const getAllAppointmentsHandler = (req, res) => {
    const appointments = (0, appointmentService_1.getAllAppointments)();
    res.json(appointments);
};
exports.getAllAppointmentsHandler = getAllAppointmentsHandler;
const getAppointmentByIdHandler = (req, res) => {
    const appointment = (0, appointmentService_1.getAppointmentById)(parseInt(req.params.id));
    if (appointment) {
        res.json(appointment);
    }
    else {
        res.status(404).send('Turno no encontrado');
    }
};
exports.getAppointmentByIdHandler = getAppointmentByIdHandler;
const scheduleAppointmentHandler = (req, res) => {
    const { date, time, userId } = req.body;
    const newAppointment = (0, appointmentService_1.createAppointment)(new Date(date), time, userId);
    res.status(201).json(newAppointment);
};
exports.scheduleAppointmentHandler = scheduleAppointmentHandler;
const cancelAppointmentHandler = (req, res) => {
    const { id } = req.body;
    const success = (0, appointmentService_1.cancelAppointment)(id);
    if (success) {
        res.send('Turno cancelado exitosamente');
    }
    else {
        res.status(404).send('Turno no encontrado');
    }
};
exports.cancelAppointmentHandler = cancelAppointmentHandler;
