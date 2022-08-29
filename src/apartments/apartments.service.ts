import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import Apartment from './apartment.entity';
// import Apartment from './apartment.interface';
import CreateApartmentDto from './dto/createApartment.dto';
import UpdateApartmentDto from './dto/updateApartment.dto';

@Injectable()
export default class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentsRepository: Repository<Apartment>,
  ) {}

  async getAllApartments({ price, rooms }) {
    const findOptions: FindManyOptions = {};
    price && (findOptions.order = { price });
    rooms && (findOptions.where = { rooms });
    return await this.apartmentsRepository.find(findOptions);
  }

  async getApartmentById(id: number): Promise<Apartment | null> {
    const apartment = await this.apartmentsRepository.findOne({
      where: { id },
    });
    if (apartment) {
      return apartment;
    }
    throw new HttpException('Apartment not found', HttpStatus.NOT_FOUND);
  }

  async replaceApartment(id: number, apartment: UpdateApartmentDto) {
    const updateRes = await this.apartmentsRepository.update(id, apartment);
    const updatedApartment = await this.apartmentsRepository.findOne({
      where: {
        id,
      },
    });
    if (updateRes.affected && updatedApartment) {
      return updatedApartment;
    }
    throw new HttpException('Apartment not found', HttpStatus.NOT_FOUND);
  }

  async createApartment(apartment: CreateApartmentDto) {
    const newApartment = this.apartmentsRepository.create(apartment);
    await this.apartmentsRepository.save(newApartment);
    return newApartment;
  }

  async deleteApartment(id: number) {
    const res = await this.apartmentsRepository.delete(id);
    if (res.affected) {
      return { id };
    }
    throw new HttpException('Apartment not found', HttpStatus.NOT_FOUND);
  }
}
