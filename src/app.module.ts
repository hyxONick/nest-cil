import { LoggerModule } from './logger/logger.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import {schemaModule} from "./schema.module";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    schemaModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('databaseConfig'),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
