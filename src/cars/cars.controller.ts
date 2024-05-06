import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { CarFilters } from './interfaces/cars-filters.interface';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars(
    @Query('id') id: number,
    @Query('make') make: string,
    @Query('model') model: string,
    @Query('year') year: number,
  ) {
    const filters: CarFilters = {
      id,
      make,
      model,
      year,
    };

    return this.carsService.getAllCars(filters);
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.getCarById(Number(id));
  }

  @Post()
  createCar(@Body() carData: CreateCarDto) {
    return this.carsService.createCar(carData);
  }

  @Patch(':id')
  updateCar(@Param('id') carId: string, @Body() updateData: UpdateCarDto) {
    return this.carsService.updateCar(Number(carId), updateData);
  }

  @Delete(':id')
  deleteCar(@Param('id') carId: string) {
    return this.carsService.deleteCar(Number(carId));
  }
}
