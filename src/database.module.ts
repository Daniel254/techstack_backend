import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Apartment from './apartments/apartment.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST') || process.env.POSTGRES_HOST,
        port: configService.get('POSTGRES_PORT') || process.env.POSTGRES_PORT,
        username:
          configService.get('POSTGRES_USER') || process.env.POSTGRES_USER,
        password:
          configService.get('POSTGRES_PASSWORD') ||
          process.env.POSTGRES_PASSWORD,
        database: configService.get('POSTGRES_DB') || process.env.POSTGRES_DB,
        entities: [Apartment],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
