import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Apartment {
  @PrimaryGeneratedColumn()
  @Transform(({ value }) => value.toString())
  public id: number;

  @Column()
  public rooms: number;

  @Column({ length: 99 })
  public name: string;

  @Column('decimal', {
    precision: 12,
    scale: 2,
    transformer: {
      to: (data) => data,
      from: (data) => parseFloat(data),
    },
  })
  public price: number;

  @Column({ length: 999, nullable: true })
  public description: string;
}

export default Apartment;
