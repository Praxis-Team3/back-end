import { Document } from 'mongoose';

export interface Applicants extends Document {
  readonly name: string;
  readonly id: number;
  readonly phone: string;
  readonly company: string;
  readonly video: string;
  readonly status: string;
}
