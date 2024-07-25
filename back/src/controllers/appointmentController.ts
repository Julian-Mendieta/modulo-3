import { Request, Response } from 'express';
import { getAllAppointments, getAppointmentById, createAppointment, cancelAppointment } from '../service/appointmentService';

export const getAllAppointmentsHandler = (req: Request, res: Response) => {
  const appointments = getAllAppointments();
  res.json(appointments);
};

export const getAppointmentByIdHandler = (req: Request, res: Response) => {
  const appointment = getAppointmentById(parseInt(req.params.id));
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).send('Turno no encontrado');
  }
};

export const scheduleAppointmentHandler = (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  const newAppointment = createAppointment(new Date(date), time, userId);
  res.status(201).json(newAppointment);
};

export const cancelAppointmentHandler = (req: Request, res: Response) => {
  const { id } = req.body;
  const success = cancelAppointment(id);
  if (success) {
    res.send('Turno cancelado exitosamente');
  } else {
    res.status(404).send('Turno no encontrado');
  }
};
