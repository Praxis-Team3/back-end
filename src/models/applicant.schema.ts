import { Schema } from 'mongoose';

export const ApplicantSchema = new Schema(
  {
    company: { type: String },
    email: { type: String, required: true },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String },
    status: {
      type: String,
      enum: ['accepted', 'pending', 'rejected'],
      default: 'pending',
    },
    video: { type: String, required: true },
    works: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);
