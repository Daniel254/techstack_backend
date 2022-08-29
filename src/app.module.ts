import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApartmentsModule } from './apartments/apartments.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ApartmentsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('POSTGRES_HOST'),
    //     port: configService.get('POSTGRES_PORT'),
    //     username: configService.get('POSTGRES_USER'),
    //     password: configService.get('POSTGRES_PASSWORD'),
    //     database: configService.get('POSTGRES_DB'),
    //     entities: [Apartment],
    //     // synchronize: true,
    //   }),
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
