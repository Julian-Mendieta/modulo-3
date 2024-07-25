// src/interfaces.ts

export interface User {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: string;
    credentialsId: number;
  }
  
  export interface Appointment {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: 'active' | 'cancelled';
  }
  
  export interface Credential {
    id: number;
    username: string;
    password: string;
  }
  