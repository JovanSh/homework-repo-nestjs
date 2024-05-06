import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { CreateCarDto } from './create-car.dto';
import { PartialType } from '@nestjs/mapped-types';

// export class UpdateCarDto {
//   @IsOptional()
//   @IsString()
//   @Length(3, 30)
//   title: string;

//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   stock: number;

//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   @Max(10000)
//   price: number;
// }

//To use PartialType install `npm i --save @nestjs/mapped-types` so that you can import it
export class UpdateCarDto extends PartialType(CreateCarDto) {}
