import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credencial";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  birthdate!: string;

  @Column()
  nDni!: number;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];

  @OneToMany(() => Credential, credential => credential.user)
  credentials!: Credential[];
}

