import { IsString, Min, MinLength, IsDate, IsDateString } from "class-validator";

export class SurveyDto {
  @IsDateString() readonly sessionDate: Date;
  @IsString() @MinLength(1) readonly tutorName: string;
  @IsString() @MinLength(1) readonly sessionType: string;
  @IsString() @MinLength(1) readonly sessionContent: string;
  @IsString() @MinLength(1) readonly sessionTime: string;
  @IsString() @MinLength(1) readonly sessionResources: string;
  @IsString() @MinLength(1) readonly knowledgeTopic: string;
  @IsString() @MinLength(1) readonly abilityToShare: string;
  @IsString() @MinLength(1) readonly dynamic: string;
  @IsString() @MinLength(1) readonly solvedQuestions: string;
  @IsString() @MinLength(1) readonly tone: string;
  @IsString() @MinLength(1) readonly satisfactionLevel: string;
  @IsString() @MinLength(1) readonly suggestion: string;
}
