import {
  IsNegative,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCarDto {
  @IsNumber()
  @Min(0)
  @Max(10000)
  id: number;

  @IsString()
  @Length(3, 30)
  make: string;

  @IsNumber()
  @Min(0)
  model: string;

  @IsNumber()
  @Min(0)
  @Max(10000)
  year: number;
}
