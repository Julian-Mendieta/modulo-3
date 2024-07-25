"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
let appointments = [];
let currentAppointmentId = 1;
const getAllAppointments = () => {
    return appointments;
};
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (id) => {
    return appointments.find(appointment => appointment.id === id);
};
exports.getAppointmentById = getAppointmentById;
const createAppointment = (date, time, userId) => {
    const newAppointment = {
        id: currentAppointmentId++,
        date,
        time,
        userId,
        status: 'active',
    };
    appointments.push(newAppointment);
    return newAppointment;
};
exports.createAppointment = createAppointment;
const cancelAppointment = (id) => {
    const appointment = (0, exports.getAppointmentById)(id);
    if (appointment) {
        appointment.status = 'cancelled';
        return true;
    }
    return false;
};
exports.cancelAppointment = cancelAppointment;
