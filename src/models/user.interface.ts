import { Document } from 'mongoose';

export interface UserInterface extends Document {
  password: string;
  readonly authentication: any;
  readonly birthdate: string;
  readonly company: string;
  readonly email: string;
  readonly id: number;
  readonly lastnames: string;
  readonly names: string;
  readonly phone: string;
}
