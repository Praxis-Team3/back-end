import { IsString, IsInt, IsOptional } from 'class-validator';

export class ApplicantCreateDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly id: number;

  @IsString()
  @IsOptional()
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly company: string;

  @IsString()
  @IsOptional()
  readonly status: string;
}
