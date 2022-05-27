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
import { ValidationPipe } from'../pipe/validation.pipe';

@Controller('deviceType')
@ApiTags('deviceType')
export class DeviceTypeController {
  constructor(
    private readonly deviceTypeService: DeviceTypeService,
    private logger: LoggerService,
  ) {}

  @Get('/queryAll')
  @ApiOperation({ summary: '查找所有设备类型' })
  async findAll(): Promise<DeviceType[]> {
    this.logger.debug('Get All Items Endpoint');
    return this.deviceTypeService.findAll();
  }

  @Get('queryOne/:id')
  @ApiOperation({ summary: '根据ID查找设备类型' })
  // @ApiQuery({ name: 'limit', required: true })
  async findById(@Param() param): Promise<DeviceType> {
    return this.deviceTypeService.findById(param.id);
  }

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('/create')
  @ApiOperation({ summary: '创建设备类型', description: '创建设备类型' })
  async create(@Body() itemDTO: DeviceTypeDto): Promise<DeviceType> {

    return this.deviceTypeService.create(itemDTO);
  }

  @Put('update/:_id')
  @ApiOperation({ summary: '更新设备类型' })
  @ApiBody({ type: DeviceTypeDto, description: '参数可选' })
  @ApiResponse({
    status: 200,
    description: '成功返回200，失败返回400',
    type: DeviceTypeDto,
  })
  async update(@Param() param, @Body() DeviceTypeDto: DeviceTypeDto): Promise<DeviceType> {
    return this.deviceTypeService.update(param.id, DeviceTypeDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: '删除设备类型' })
  async delete(@Param() param): Promise<DeviceType> {
    return this.deviceTypeService.delete(param.id);
  }
}
