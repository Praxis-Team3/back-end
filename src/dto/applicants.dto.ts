import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';

export class ApplicantCreateDto {
  @IsOptional() @IsString() readonly company: string;
  @IsString() readonly email: string;
  @IsInt() readonly id: number;
  @IsString() readonly name: string;
  @IsOptional() @IsString() readonly phone: number;
  @IsString() @IsOptional() readonly status: string;
  @IsString() readonly video: string;
  @IsOptional() @IsBoolean() readonly works: boolean = false;
}
