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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
