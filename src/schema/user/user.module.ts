import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './schemas/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]), LoggerModule],
  controllers: [UserController],
  providers: [UserService, LoggerService],
})
export class UserModule {}

