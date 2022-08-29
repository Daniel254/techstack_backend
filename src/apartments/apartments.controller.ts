import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import ApartmentsService from './apartments.service';
import CreateApartmentDto from './dto/createApartment.dto';
import GetApartmentsDto from './dto/getApartmentsDto';
import UpdateApartmentDto from './dto/updateApartment.dto';

@Controller('apartments')
@UseInterceptors(ClassSerializerInterceptor)
export default class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  async getAllApartments(@Query() { price, rooms }: GetApartmentsDto) {
    console.log(`price: ${price}, rooms: ${rooms}`);
    return this.apartmentsService.getAllApartments({ price, rooms });
  }

  @Get(':id')
  async getApartmentById(@Param('id', ParseIntPipe) id: number) {
    console.log('id in controller', id);
    return this.apartmentsService.getApartmentById(id);
  }

  @Post()
  async createApartments(@Body() apartments: CreateApartmentDto) {
    console.log('apartments dto in controller', apartments);
    return this.apartmentsService.createApartment(apartments);
  }

  @Put(':id')
  async replaceApartment(
    @Param('id', ParseIntPipe) id: number,
    @Body() apartment: UpdateApartmentDto,
  ) {
    return this.apartmentsService.replaceApartment(id, apartment);
  }

  @Delete(':id')
  async deleteApartment(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.deleteApartment(id);
  }
}
