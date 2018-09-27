import { Document } from 'mongoose';

export interface SurveyInterface extends Document {
  readonly sessionDate: Date;
  readonly tutorName: string;
  readonly sessionType: string;
  readonly sessionContent: string;
  readonly sessionTime: string;
  readonly sessionResources: string;
  readonly knowledgeTopic: string;
  readonly abilityToShare: string;
  readonly dynamic: string;
  readonly solvedQuestions: string;
  readonly tone: string;
  readonly satisfactionLevel: string;
  readonly suggestion: string;
}
