import { Schema } from 'mongoose';

export const SurveySchema = new Schema(
  {
    sessionDate: { type: Date, required: true },
    tutorName: { type: String, required: true },
    sessionType: { type: String, required: true },
    sessionContent: { type: String, required: true },
    sessionTime: { type: String, required: true },
    sessionResources: { type: String, required: true },
    knowledgeTopic: { type: String, required: true },
    abilityToShare: { type: String, required: true },
    dynamic: { type: String, required: true },
    solvedQuestions: { type: String, required: true },
    tone: { type: String, required: true },
    satisfactionLevel: { type: String, required: true },
    suggestion: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
