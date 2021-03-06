import { LoggerModule } from './logger/logger.module';
import { DeviceTypeModule } from './schema/deviceType/deviceType.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import {schemaModule} from "./schema.module";

@Module({
  imports: [
    schemaModule,
    LoggerModule,
    DeviceTypeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get('database.uri')}`,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
