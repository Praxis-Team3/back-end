import { Document } from 'mongoose';

export interface ApplicantInterface extends Document {
  readonly birthdate: string;
  readonly company: string;
  readonly email: string;
  readonly id: number;
  readonly lastnames: string;
  readonly names: string;
  readonly phone: string;
  readonly status: string;
  readonly video: string;
  readonly works: string;
}
