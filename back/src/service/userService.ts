

import { User } from '../inertface/interfaces';
import { createCredential } from './credentialService';

let users: User[] = [];
let currentUserId = 1;

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const createUser = (name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): User => {
  const credentialsId = createCredential(username, password);
  const newUser: User = {
    id: currentUserId++,
    name,
    email,
    birthdate,
    nDni,
    credentialsId,
  };
  users.push(newUser);
  return newUser;
};
