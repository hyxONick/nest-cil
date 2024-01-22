import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { ProductController } from './product.controller';
import {ProductService} from './product.service';
import { Product } from './schemas/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), LoggerModule],
  controllers: [ProductController],
  providers: [ProductService, LoggerService],
})
export class ProductModule {}

