import { Router } from 'express';
import { getAllAppointmentsHandler, getAppointmentByIdHandler, scheduleAppointmentHandler, cancelAppointmentHandler } from '../controllers/appointmentController';

const router = Router();

router.get('/', getAllAppointmentsHandler);
router.get('/:id', getAppointmentByIdHandler);
router.post('/schedule', scheduleAppointmentHandler);
router.put('/cancel', cancelAppointmentHandler);

export default router;

