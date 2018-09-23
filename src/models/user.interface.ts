import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly authentication: any;
  readonly birthdate: string;
  readonly company: string;
  readonly email: string;
  readonly id: number;
  readonly lastnames: string;
  readonly names: string;
  readonly password: string;
  readonly phone: string;
}
