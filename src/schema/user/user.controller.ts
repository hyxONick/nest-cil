import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiQuery,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { LoggerService } from 'src/logger/logger.service';
import { ValidationPipe } from '../../pipe/validation.pipe';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
    private logger: LoggerService,
  ) {}

  @Get('/queryAll')
  @ApiOperation({ summary: 'Query all users' })
  async findAll(): Promise<User[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.UserService.findAll();
  }

  @Get('queryOne/:id')
  @ApiOperation({ summary: 'Query user by id' })
  // @ApiQuery({ name: 'limit', required: true })
  async findById(@Param() param): Promise<User> {
    return this.UserService.findById(param.id);
  }

  @UsePipes(new ValidationPipe()) // pipe validate
  @Post('/create')
  @ApiOperation({ summary: 'create account', description: 'create account' })
  async create(@Body() UserDto: UserDto): Promise<User> {

    return this.UserService.create(UserDto);
  }

  @Put('update/:_id')
  @ApiOperation({ summary: 'update account' })
  @ApiBody({ type: UserDto, description: 'flexible param' })
  @ApiResponse({
    status: 200,
    description: 'success => 200，fail => 400',
    type: UserDto,
  })
  async update(@Param() param, @Body() UserDto: UserDto): Promise<User> {
    return this.UserService.update(param.id, UserDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'delete user by id' })
  async delete(@Param() param): Promise<User> {
    return this.UserService.delete(param.id);
  }
}
