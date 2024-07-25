

import { Appointment } from '../inertface/interfaces';

let appointments: Appointment[] = [];
let currentAppointmentId = 1;

export const getAllAppointments = (): Appointment[] => {
  return appointments;
};

export const getAppointmentById = (id: number): Appointment | undefined => {
  return appointments.find(appointment => appointment.id === id);
};

export const createAppointment = (date: Date, time: string, userId: number): Appointment => {
  const newAppointment: Appointment = {
    id: currentAppointmentId++,
    date,
    time,
    userId,
    status: 'active',
  };
  appointments.push(newAppointment);
  return newAppointment;
};

export const cancelAppointment = (id: number): boolean => {
  const appointment = getAppointmentById(id);
  if (appointment) {
    appointment.status = 'cancelled';
    return true;
  }
  return false;
};
