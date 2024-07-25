import { Router } from 'express';
import { getAllUsersHandler, getUserByIdHandler, registerUserHandler, loginUserHandler } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);

export default router;
