import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Response } from 'express';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id') carId: string) {
    return this.carsService.getCarById(carId);
  }

  @Post()
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.createCar(body);
  }

  @Patch(':id')
  updateCar(@Param('id') carId: string, @Body() updateData: UpdateCarDto) {
    return this.carsService.updateCar(carId, updateData);
  }

  @Delete(':id')
  async deleteCar(@Res() res: Response, @Param('id') carId: string) {
    await this.carsService.deleteCar(carId);

    res.sendStatus(204);
  }
}
