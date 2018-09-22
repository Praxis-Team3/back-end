import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';

export class ApplicantCreateDto {
  @IsString() readonly birthdate: string;
  @IsOptional() @IsString() readonly company: string;
  @IsString() readonly email: string;
  @IsInt() readonly id: number;
  @IsString() readonly lastnames: string;
  @IsString() readonly names: string;
  @IsString() password: string;
  @IsOptional() @IsString() readonly phone: number;
  @IsString() @IsOptional() readonly status: string;
  @IsString() readonly video: string;
  @IsOptional() @IsBoolean() readonly works: boolean = false;
}
