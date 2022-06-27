import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { DeviceTypeController } from './deviceType.controller';
import { DeviceTypeService } from './deviceType.service';
import { DeviceTypeSchema } from './schemas/deviceType.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DeviceType', schema: DeviceTypeSchema }]),
    LoggerModule,
  ],
  controllers: [DeviceTypeController],
  providers: [DeviceTypeService, LoggerService],
})
export class DeviceTypeModule {}
