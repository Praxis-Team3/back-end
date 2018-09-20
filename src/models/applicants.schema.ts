import { Schema } from 'mongoose';

export const ApplicantsSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    id: { type: Number, required: true },
    phone: { type: String },
    company: { type: String },
    video: { type: String, required: true },
    status: {
      type: String,
      enum: ['accepted', 'pending', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);
