import { IsString, Length, IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @IsNumber()
  @Min(0)
  @IsOptional()
  id: number;

  @IsString()
  @Length(3, 30)
  @IsOptional()
  make: string;

  @IsString()
  @Length(3, 30)
  @IsOptional()
  model: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  year: number;
}
