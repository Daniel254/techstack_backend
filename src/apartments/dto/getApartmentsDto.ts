import { Transform } from 'class-transformer';
import { IsIn, IsOptional, IsPositive } from 'class-validator';

export default class GetApartmentsDto {
  @Transform(({ value }) => value.toUpperCase() || null)
  @IsIn(['ASC', 'DESC'])
  @IsOptional()
  price?: string;

  @Transform(({ value }) => parseInt(value) || null)
  @IsPositive()
  @IsOptional()
  rooms?: number;
}
