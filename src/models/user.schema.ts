import { Schema } from 'mongoose';

const AuthenticationSchema = new Schema({
  token: { type: String },
}, {
    timestamps: true,
  });

export const UserSchema = new Schema(
  {
    authentication: AuthenticationSchema,
    birthdate: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    id: { type: Number, required: true },
    lastnames: { type: String, required: true },
    names: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
  },
  {
    timestamps: true,
  },
);
