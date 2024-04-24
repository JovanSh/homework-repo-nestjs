import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { CreateCarDto } from './dtos/create-car.dto';
import { NotFoundError } from 'rxjs';
import { UpdateCarDto } from './dtos/update-car.dto';
import { CarFilters } from './interfaces/cars-filters.interface';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carsRepo: Repository<Car>) {}

  getAllCars(filters: CarFilters) {
    const filterConfig: FindManyOptions<Car> = {};

    console.log(filters);

    if (filters.id) {
      filterConfig.where = { id: filters.id };
    }

    if (filters.make) {
      filterConfig.where = { make: filters.make };
    }

    if (filters.model) {
      filterConfig.where = { model: filters.model };
    }

    if (filters.year) {
      filterConfig.where = { year: filters.year };
    }

    console.log(filterConfig);

    return this.carsRepo.find(filterConfig);
  }

  async getCarById(id: number) {
    const foundCar = await this.carsRepo.findOneBy({ id });

    if (!foundCar) throw new NotFoundException('Car not found');

    return foundCar;
  }

  createCar(carData: CreateCarDto) {
    return this.carsRepo.save(carData);
  }

  async updateCar(carId: number, updateData: UpdateCarDto) {
    const foundCar = await this.getCarById(carId);

    Object.assign(foundCar, updateData);

    // const updatedCar = {...foundCar, updateData}

    //This will update the car instead of creating a new one becasue we sent a full entity object with id
    await this.carsRepo.save(foundCar);
  }

  async deleteCar(carId: number) {
    const foundCar = await this.getCarById(carId);

    await this.carsRepo.remove(foundCar);
  }
}
