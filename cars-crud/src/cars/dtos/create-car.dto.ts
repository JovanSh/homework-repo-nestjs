import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateCarDto {
  @IsNumber()
  @Min(0)
  id: number;

  @IsString()
  @Length(3, 30)
  make: string;

  @IsString()
  @Length(3, 30)
  model: string;

  @IsNumber()
  @Min(0)
  year: number;
}
