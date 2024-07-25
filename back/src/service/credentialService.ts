

import { Credential } from "../inertface/interfaces";

let credentials: Credential[] = [];
let currentCredentialId = 1;

export const createCredential = (username: string, password: string): number => {
  const newCredential: Credential = {
    id: currentCredentialId++,
    username,
    password,
  };
  credentials.push(newCredential);
  return newCredential.id;
};

export const validateCredential = (username: string, password: string): number | null => {
  const credential = credentials.find(c => c.username === username && c.password === password);
  return credential ? credential.id : null;
};
