import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export default class UpdateApartmentDto {
  id: number;

  @IsPositive()
  @IsInt()
  rooms: number;

  @IsString()
  @Length(1, 99)
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsOptional()
  @Length(1, 999)
  description: string = null;
}
