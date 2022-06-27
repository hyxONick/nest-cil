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
import { DeviceTypeDto } from './dto/deviceType.dto';
import { DeviceTypeService } from './deviceType.service';
import { DeviceType } from './interfaces/deviceType.interface';
import { LoggerService } from 'src/logger/logger.service';
import { ValidationPipe } from '../../pipe/validation.pipe';

@Controller('deviceType')
@ApiTags('deviceType')
export class DeviceTypeController {
  constructor(
    private readonly deviceTypeService: DeviceTypeService,
    private logger: LoggerService,
  ) {}

  @Get('/queryAll')
  @ApiOperation({ summary: 'Query all deviceType' })
  async findAll(): Promise<DeviceType[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.deviceTypeService.findAll();
  }

  @Get('queryOne/:id')
  @ApiOperation({ summary: 'Query deviceType by id' })
  // @ApiQuery({ name: 'limit', required: true })
  async findById(@Param() param): Promise<DeviceType> {
    return this.deviceTypeService.findById(param.id);
  }

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('/create')
  @ApiOperation({ summary: 'create deviceType', description: 'create deviceType' })
  async create(@Body() DeviceTypeDto: DeviceTypeDto): Promise<DeviceType> {

    return this.deviceTypeService.create(DeviceTypeDto);
  }

  @Put('update/:_id')
  @ApiOperation({ summary: 'update deviceType' })
  @ApiBody({ type: DeviceTypeDto, description: 'flexible param' })
  @ApiResponse({
    status: 200,
    description: 'success => 200，fail => 400',
    type: DeviceTypeDto,
  })
  async update(@Param() param, @Body() DeviceTypeDto: DeviceTypeDto): Promise<DeviceType> {
    return this.deviceTypeService.update(param.id, DeviceTypeDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'delete user by id' })
  async delete(@Param() param): Promise<DeviceType> {
    return this.deviceTypeService.delete(param.id);
  }
}
