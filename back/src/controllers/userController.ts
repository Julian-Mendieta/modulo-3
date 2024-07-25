import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser } from '../service/userService';

export const getAllUsersHandler = (req: Request, res: Response) => {
  const users = getAllUsers();
  res.json(users);
};

export const getUserByIdHandler = (req: Request, res: Response) => {
  const user = getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Usuario no encontrado');
  }
};

export const registerUserHandler = (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  const newUser = createUser(name, email, new Date(birthdate), nDni, username, password);
  res.status(201).json(newUser);
};

export const loginUserHandler = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const credentialsId = validateCredential(username, password);
  if (credentialsId !== null) {
    res.json({ message: 'Login exitoso', credentialsId });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
};
function validateCredential(username: any, password: any) {
  throw new Error('Function not implemented.');
}

