import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export default class CreateApartmentDto {
  @Transform(({ value }) => parseInt(value))
  @IsPositive()
  @IsInt()
  rooms: number;

  @IsString()
  @Length(1, 99)
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @Transform(({ value }) => value || null)
  @IsOptional()
  @Length(1, 999)
  description: string;
}
