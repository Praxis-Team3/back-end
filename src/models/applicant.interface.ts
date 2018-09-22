import { Document } from 'mongoose';

export interface ApplicantInterface extends Document {
  readonly company: string;
  readonly email: string;
  readonly id: number;
  readonly name: string;
  readonly phone: string;
  readonly status: string;
  readonly video: string;
  readonly works: string;
}
